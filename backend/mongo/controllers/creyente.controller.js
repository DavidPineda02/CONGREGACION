import Creyente from "../models/Creyente.js";

const getCreyentes = async (req, res) =>{
    const creyentes = await Creyente.find();
    res.json(creyentes);
}

const getCreyente = async (req, res) =>{
    const creyente = await Creyente.findOne({_id: req.params.id});
    res.json(creyente);
}

const addCreyente = async (req, res) =>{
    try {
        const {nombre, ministerio, nivelFormacion, edad, nivelRuta} = req.body;
        const creyente = new Creyente({nombre, ministerio, nivelFormacion, edad, nivelRuta});

        const nuevoCreyente = await creyente.save();
        res.json(nuevoCreyente);
    } catch (error) {
        console.log(error);
    }
}

const deleteCreyente = async (req, res) =>{
    try {
        await Creyente.deleteOne({_id: req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Creyente no Existe"})
    }
}

const updateCreyente = async (req, res) =>{
    try {
        const creyente = await Creyente.findOne({_id: req.params.id});

        if(req.body.nombre){
            creyente.nombre = req.body.nombre
        }

        if(req.body.ministerio){
            creyente.ministerio = req.body.ministerio
        }

        if(req.body.nivelFormacion){
            creyente.nivelFormacion = req.body.nivelFormacion
        }

        if(req.body.edad){
            creyente.edad = req.body.edad
        }

        if(req.body.nivelRuta){
            creyente.nivelRuta = req.body.nivelRuta
        }
        await creyente.save();
        res.json(creyente);
    } catch (error) {
        res.status(404);
        res.send({error: "Creyente no Existe"})
    }
}

export { getCreyentes, getCreyente, addCreyente, deleteCreyente, updateCreyente };