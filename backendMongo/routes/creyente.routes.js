import Router from "express";
import { getCreyentes, getCreyente, addCreyente, deleteCreyente, updateCreyente } from "../controllers/creyente.controller.js";
import { check } from "express-validator";
import Ministerio from "../models/Ministerio.js";
import NivelFormacion from "../models/NivelFormacion.js";
import NivelRuta from "../models/NivelRuta.js";
import { validateDocument } from "../middleware/validate.documents.js";

const router = Router();

router.get("/all", getCreyentes);
router.get("/one/:id", getCreyente);
router.post("/add", [
    check('nombre', 'El nombre no es valido').not().isEmpty(),
    check('ministerio').custom(async(nombre = '') =>{
        const existeCreyente = await Ministerio.findOne({nombre});
        if(!existeCreyente){   
            throw new Error(`El Ministerio ${nombre} no esta en la base de datos`)
        }
    }),
    check('nivelFormacion').custom(async(nombre = '') =>{
        const existeNivelFormacion = await NivelFormacion.findOne({nombre});
        if(!existeNivelFormacion){
            throw new Error(`El Nivel de Formacion ${nombre} no esta en la base de datos`)
        }
    }),
    check('edad', 'La edad no es valida').not().isEmpty(),
    check('nivelRuta').custom(async(nombre = '') =>{
        const existeNivelRuta = await NivelRuta.findOne({nombre});
        if(!existeNivelRuta){
            throw new Error(`El Nivel de Ruta ${nombre} no esta en la base de datos`)
        }
    }), validateDocument
], addCreyente);
router.delete("/del/:id", deleteCreyente);
router.patch("/upd/:id", updateCreyente);

export default router;