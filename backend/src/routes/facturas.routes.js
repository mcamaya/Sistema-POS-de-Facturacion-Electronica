import { Router } from "express";
import { check } from "express-validator";
import * as facturasController from "../controllers/facturas.controllers.js";
import verifyToken from "../middlewares/verifyToken.js";
import validateDocuments from "../middlewares/validateDocuments.js";
import { existeCliente, existenProductos, existeNumFactura } from "../helpers/db.validators.js";

const router = Router();

router.get('/', [verifyToken, validateDocuments],facturasController.getFacturas);
router.get('/:id', [verifyToken, validateDocuments],facturasController.getFacturaByID);

router.post('/', [
    verifyToken,
    /* check('productosIds').custom(existenProductos), */
    check('clienteId').custom(existeCliente),
    check('numeroFactura').custom(existeNumFactura),
    validateDocuments
], facturasController.postNewFactura);

export default router;