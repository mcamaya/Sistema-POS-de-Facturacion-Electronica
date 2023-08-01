import { Router } from "express";
import * as proveedoresController from "../controllers/proveedores.controllers.js";
import proveedoresValidator from "../middlewares/proveedores.validation.js";

const router = Router();

router.get('/', proveedoresController.getProveedores);
router.get('/:id', proveedoresController.getProveedorByID);
router.post('/', proveedoresValidator, proveedoresController.postNewProveedor);
router.delete('/:id', proveedoresController.deleteProveedorByID);
router.patch('/:id', proveedoresController.updateProveedorByID);

export default router;