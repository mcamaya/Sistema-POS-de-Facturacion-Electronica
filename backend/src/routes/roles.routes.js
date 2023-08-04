import { Router } from "express";
import * as rolesController from "../controllers/roles.controllers.js";
import validateDocuments from "../middlewares/validateDocuments.js";
import isAdminRole from "../middlewares/isAdminRole.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = Router();

router.get('/', rolesController.getAllRoles);
router.get('/:id', rolesController.getOneRol);

router.post('/', [
    verifyToken,
    isAdminRole,
    validateDocuments
], rolesController.postNewRol);

router.delete('/:id', [
    verifyToken,
    isAdminRole,
    validateDocuments
], rolesController.deleteRoles);


export default router;