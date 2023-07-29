import usuariosController from "../controllers/usuario.controllers.js";
import { Router } from "express";
import userValidation from "../middlewares/usuarios.validation.js";

const router = Router();

router.get('/', usuariosController.getAllUsuarios);
router.get('/:id', usuariosController.getOneUsuario);
router.post('/', userValidation, usuariosController.postNewUsuario);
router.delete('/:id', usuariosController.deleteUsuario);
router.patch('/:id', usuariosController.updateUsuario);

export default router;