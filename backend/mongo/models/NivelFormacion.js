//import
import mongoose from "mongoose";

//schema
const nivelFormacionSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    }
},
{
    timestamps:true
})

//model
const NivelFormacion = mongoose.model("nivelFormacion",nivelFormacionSchema,"nivelFormaciones")

//export
export default NivelFormacion