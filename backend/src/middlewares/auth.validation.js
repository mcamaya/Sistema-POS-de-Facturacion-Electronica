import { check } from "express-validator";
import validateDocuments from "./validateDocuments.js";

const authMiddleware = [
    check('email', 'Favor ingresar un email válido').isEmail(),
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validateDocuments
];

export default authMiddleware;