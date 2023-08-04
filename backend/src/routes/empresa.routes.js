import { Router } from "express";
import { check } from "express-validator";
import * as empresaController from "../controllers/empresa.controllers.js";
import validateDocuments from "../middlewares/validateDocuments.js";
import verifyToken from "../middlewares/verifyToken.js";
import isAdminRole from "../middlewares/isAdminRole.js";
import { existeEmpresa } from "../helpers/db.validators.js";

const router = Router();

router.get('/', verifyToken, empresaController.getEmpresa);

router.post('/', [
    verifyToken,
    isAdminRole,
    check('nombre').custom(existeEmpresa),
    validateDocuments
], empresaController.postDataEmpresa);

router.patch('/', [
    verifyToken,
    isAdminRole,
    validateDocuments
], empresaController.updateDataEmpresa);

export default router;