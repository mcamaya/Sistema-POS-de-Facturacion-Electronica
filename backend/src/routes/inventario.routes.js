import { Router } from "express";
import * as inventarioController from "../controllers/inventario.controllers.js";

const router = Router();

router.get('/', inventarioController.getInventario);
router.get('/:id', inventarioController.getItemDeInventarioByID);

export default router;