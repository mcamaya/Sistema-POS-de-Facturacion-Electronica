import { Router } from "express";
import { check } from "express-validator";
import * as clientesController from "../controllers/clientes.controllers.js";
import validateDocuments from "../middlewares/validateDocuments.js";
import verifyToken from "../middlewares/verifyToken.js";
import isAdminRole from "../middlewares/isAdminRole.js";
import { existeDocumentoCliente } from "../helpers/db.validators.js";

const router = Router();

router.get('/', clientesController.getClientes);
router.get('/:id', clientesController.getClienteByID);

router.post('/', [
    verifyToken,
    isAdminRole,
    check('nombre', 'Favor ingrese el nombre').not().isEmpty(),
    check('numeroDocumento', 'Favor ingrese el numero documento').not().isEmpty(),
    check('numeroDocumento').custom(existeDocumentoCliente),
    check('celular', 'El celular debe contener máximo 10 números').isLength({max:10}),
    validateDocuments
], clientesController.postNewCliente);

router.delete('/:id', [
    verifyToken,
    isAdminRole,
    validateDocuments
], clientesController.deleteCliente);

router.patch('/:id', [
    verifyToken,
    check('numeroDocumento').custom(existeDocumentoCliente),
    check('celular', 'El celular debe contener máximo 10 números').isLength({max:10}),
    validateDocuments
], clientesController.updateCliente);

export default router;