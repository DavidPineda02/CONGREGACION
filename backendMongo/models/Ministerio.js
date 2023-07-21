//mongoose
import mongoose from "mongoose";

//schema
const ministerioSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        trim:true,
    }
},
{
    timestamps:true
})

//model
const Ministerio = mongoose.model("Ministerio",ministerioSchema,"ministerios")

//export
export default Ministerio

