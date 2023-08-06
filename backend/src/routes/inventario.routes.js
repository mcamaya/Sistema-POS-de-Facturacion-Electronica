import { Router } from "express";
import verifyToken from "../middlewares/verifyToken.js";
import validateDocuments from "../middlewares/validateDocuments.js";
import * as inventarioController from "../controllers/inventario.controllers.js";

const router = Router();

router.get('/', inventarioController.getInventario);
router.get('/:id', inventarioController.getItemDeInventarioByID);
router.patch('/:id', [verifyToken, validateDocuments], inventarioController.updateStockInventario);

export default router;