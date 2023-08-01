import { check } from "express-validator";
import validateDocuments from "./validateDocuments.js";
import Cliente from "../models/Cliente.js";

const clientesValidator = [
    check('nombre', 'Favor ingrese el nombre').not().isEmpty(),
    check('numeroDocumento', 'Favor ingrese el numero documento').not().isEmpty(),
    check('numeroDocumento').custom(async (numDoc = '') => {
        const existeDocumento = await Cliente.findOne({numDoc});
        if(existeDocumento){
            throw new Error('El documento ya está registrado'); 
        }
    }),
    check('email', 'Favor ingrese un email válido').isEmail(),
    check('celular', 'El celular debe contener máximo 10 números').isLength({max:10}),
    validateDocuments
];

export default clientesValidator;