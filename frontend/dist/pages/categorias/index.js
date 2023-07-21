import { getCategories, nuevaCategoria, deleteCategory, obtenerCategory, editarCategory } from "./API.js";

let cat = document.querySelector("#categories");

document.addEventListener("DOMContentLoaded", () => {
    cargarCategorias();
}); 
async function cargarCategorias(){
    let categorias = await obtainCategories();
    categorias.forEach(element => {
        let plantilla = `
        <tr>
        <td>${element.id_categoria}</td>
        <td>${element.nombre_categoria}</td>
        <td>${element.descripcion_categoria}</td>
        <td>${element.img_categoria}</td>
        <td><a class="btn btn-warning update" id=${element.id_categoria} data-bs-toggle="modal"
        data-bs-target="#updateCategory">Editar</a></td>
        <td><button class="btn btn-danger delete" id="${element.id_categoria}">Eliminar</button></td>
        <td>a</td>
    </tr>
    `;
    
    cat.innerHTML+=plantilla; 
    });
}

let formulario = document.getElementById("agregarCategoria");
formulario.addEventListener('submit',nuevoCategoria);

function nuevoCategoria(e){
    e.preventDefault();
    let nombre_categoria = document.querySelector("#nombreCategoria").value;
    let descripcion_categoria = document.querySelector("#descripcionCategoria").value;
    let img_categoria = document.querySelector("#imagenCategoria").value;
    let registro={
        nombre_categoria,
        descripcion_categoria,
        img_categoria
    }

    if(validation(registro)){
        alert("Todos los datos son obligatorios");
    } return nuevaCategoria(registro);
    
}

function validation(Objeto){
    return !Object.values(Objeto).every(element=>element !== '')
}

let eliminar = document.querySelector("#categories");
eliminar.addEventListener("click",borrar);

function borrar(e){
    if(e.target.classList.contains('delete')){
        let id = e.target.getAttribute('id')
        console.log(id);
        let confirmar = confirm("Desea Eliminarlo?")
        if(confirmar){
            deleteCategory(id);
        }
    } else if(e.target.classList.contains('update')){
        let id = e.target.getAttribute('id');
        obtenerCategoria(id);
    }
}


let obtenerCategoria = async (id)=>{
    let data = await obtenerCategory(id);
    let {nombre_categoria, descripcion_categoria, img_categoria} = data[0];
    console.log(data[0]);
    let nombre = document.querySelector("#CategoriaNombreUpdate");
    nombre.setAttribute("placeholder",nombre_categoria);
    nombre.setAttribute("idCat",id);
    let descripcion = document.querySelector("#DescripcionUpdate");
    descripcion.setAttribute("placeholder",descripcion_categoria);
    let imagen = document.querySelector("#ImagenUpdate");
    imagen.setAttribute("placeholder",img_categoria);
}
let updateFormulario = document.querySelector("#formularioUpdate");
updateFormulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    updateCategoria();
})
function updateCategoria(){
    let nombre = document.querySelector("#CategoriaNombreUpdate");
    let id = parseInt(nombre.getAttribute('idCat'));
    let CategoriaNombre = document.querySelector("#CategoriaNombreUpdate").value;
    let descripcion = document.querySelector("#DescripcionUpdate").value;
    let imagen = document.querySelector("#ImagenUpdate").value;
    let categoria = {
        nombre_categoria: CategoriaNombre,
        descripcion_categoria: descripcion,
        img_categoria: imagen
    }
    if(validation(categoria)){
        alert("Todos los datos son obligatorios");
    } return editarCategory(categoria,id);
}