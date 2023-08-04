import { Router } from "express";
import { check } from "express-validator";
import * as serviciosControllers from "../controllers/servicios.controllers.js"
import verifyToken from "../middlewares/verifyToken.js";
import isAdminRole from "../middlewares/isAdminRole.js";
import validateDocuments from "../middlewares/validateDocuments.js";
import { existeCategoria } from "../helpers/db.validators.js";

const  router = Router();

router.get('/', serviciosControllers.getAllServicios);
router.get('/:id', serviciosControllers.getServicioByID);

router.post('/', [
    verifyToken,
    isAdminRole,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('precio', 'El precio es obligatorio').not().isEmpty(),
    check('categoria', 'La categoría es obligatoria').not().isEmpty(),
    check('categoria').custom(existeCategoria),
    validateDocuments
], serviciosControllers.postNewServicio);

router.delete('/:id', [
    verifyToken,
    isAdminRole,
    validateDocuments
], serviciosControllers.deleteServicio);

router.patch('/:id', [
    verifyToken,
    check('categoria').custom(existeCategoria),
    validateDocuments
], serviciosControllers.updateServicio);

export default router;