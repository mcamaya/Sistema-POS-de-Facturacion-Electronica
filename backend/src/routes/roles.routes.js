import { Router } from "express";
import { getRoles, getOneRol, postRoles, deleteRoles } from "../controllers/roles.controllers.js";

const router = Router();

router.get('/', getRoles);
router.get('/:id', getOneRol);
router.post('/', postRoles);
router.delete('/:id', deleteRoles);

export default router;