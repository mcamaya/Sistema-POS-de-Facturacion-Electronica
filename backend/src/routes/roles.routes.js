import { Router } from "express";
import rolesController from "../controllers/roles.controllers.js";

const router = Router();

router.get('/', rolesController.getAllRoles);
router.get('/:id', rolesController.getOneRol);
router.post('/', rolesController.postNewRol);
router.delete('/:id', rolesController.deleteRoles);

export default router;