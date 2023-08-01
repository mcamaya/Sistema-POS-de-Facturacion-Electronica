import { check } from "express-validator";
import validateDocuments from "./validateDocuments.js";
import Proveedor from "../models/Proveedor.js";

const proveedoresValidator = [
    check('nombre', 'Favor ingrese el nombre').not().isEmpty(),
    check('numeroDocumento', 'Favor ingrese el numero de documento').not().isEmpty(),
    check('numeroDocumento').custom(async (numDoc = '') => {
        const existeDocumento = await Proveedor.findOne({numDoc});
        if(existeDocumento){
            throw new Error('El documento ya está registrado'); 
        }
    }),
    validateDocuments
];

export default proveedoresValidator;