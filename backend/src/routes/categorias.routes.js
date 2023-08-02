import { Router } from "express";
import * as categoriasController from "../controllers/categorias.controllers.js";

const router = Router();

router.get('/', categoriasController.getAllCategorias);
router.post('/', categoriasController.postNewCategoria);

export default router;