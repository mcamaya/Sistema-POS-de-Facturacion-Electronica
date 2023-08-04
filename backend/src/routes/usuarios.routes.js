import * as usuariosController from "../controllers/usuario.controllers.js";
import { Router } from "express";
import { check } from "express-validator";
import validateDocuments from "../middlewares/validateDocuments.js";
import verifyToken from "../middlewares/verifyToken.js";
import isAdminRole from "../middlewares/isAdminRole.js";
import { existeRol, existeEmailUsuario } from "../helpers/db.validators.js";

const router = Router();

router.get('/', usuariosController.getAllUsuarios);
router.get('/:id', usuariosController.getOneUsuario);

router.post('/', [
    verifyToken,
    isAdminRole,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña debe tener mínimo 6 caracteres').isLength({min:6}),
    check('email', 'El email no es válido').isEmail(),
    check('email').custom(existeEmailUsuario),
    check('rol').custom(existeRol),
    validateDocuments
], usuariosController.postNewUsuario);

router.delete('/:id', [
    verifyToken,
    isAdminRole,
    validateDocuments
], usuariosController.deleteUsuario);

router.patch('/:id', [
    verifyToken,
    check('rol').custom(existeRol),
    validateDocuments
],usuariosController.updateUsuario);

export default router;