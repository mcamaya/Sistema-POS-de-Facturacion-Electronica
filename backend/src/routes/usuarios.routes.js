import usuariosController from "../controllers/usuario.controllers.js";
import { Router } from "express";

const router = Router();

router.get('/', usuariosController.getAllUsuarios);
router.get('/:id', usuariosController.getOneUsuario);
router.post('/', usuariosController.postNewUsuario);
router.delete('/:id', usuariosController.deleteUsuario);
router.patch('/:id', usuariosController.updateUsuario);

export default router;