//mongoose
import mongoose from "mongoose"

//schema
const creyenteSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: [true,"el nombre es obligatorio"],
        trim: true
    },

    ministerio:{
        type: String,
        required: [true,"el ministerio es obligatorio"],
        trim: true
    },

    nivelFormacion:{
        type: String,
        required: [true,"este campo es obligatorio"],
        trim: true
    },

    edad:{
        type: Number,
        required: [true,"la edad es obligatoria"],
        trim: true
    },

    nivelRuta:{
        type: String,
        required: [true,"la ruta es obligatoria"],
        trim: true
    }

},
{
    timestamps:true
})

//model
const Creyente = mongoose.model("Creyente",creyenteSchema,"creyentes")

//export
export default Creyente