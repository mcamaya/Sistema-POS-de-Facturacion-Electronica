import { Router } from "express";
import * as productosController from "../controllers/productos.controllers.js";

const router = Router();

router.get('/', productosController.getAllProductos);
router.get('/:id', productosController.getProductByID);
router.post('/', productosController.postNewProduct);
router.delete('/:id', productosController.deleteProducto);

export default router;