//mongoose
import mongoose from "mongoose";

//schema
const nivelRutaSchema = mongoose.Schema({
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
const NivelRuta = mongoose.model("NivelRuta",nivelRutaSchema,"nivelRutas")

//export
export default NivelRuta