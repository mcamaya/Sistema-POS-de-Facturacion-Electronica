import { Router } from "express";
import { check } from "express-validator";
import * as proveedoresController from "../controllers/proveedores.controllers.js";
import validateDocuments from "../middlewares/validateDocuments.js";
import verifyToken from "../middlewares/verifyToken.js";
import isAdminRole from "../middlewares/isAdminRole.js";
import { existeDocumentoProveedor } from "../helpers/db.validators.js";

const router = Router();

router.get('/', proveedoresController.getProveedores);
router.get('/:id', proveedoresController.getProveedorByID);

router.post('/', [
    verifyToken,
    isAdminRole,
    check('nombre', 'Favor ingrese el nombre').not().isEmpty(),
    check('numeroDocumento', 'Favor ingrese el numero de documento').not().isEmpty(),
    check('numeroDocumento').custom(existeDocumentoProveedor),
    validateDocuments
], proveedoresController.postNewProveedor);

router.delete('/:id', [
    verifyToken,
    isAdminRole,
    validateDocuments
], proveedoresController.deleteProveedorByID);

router.patch('/:id', [
    verifyToken,
    validateDocuments
], proveedoresController.updateProveedorByID);

export default router;