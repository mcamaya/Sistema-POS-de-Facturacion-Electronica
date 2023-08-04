import { Router } from "express";
import { check } from "express-validator";
import * as productosController from "../controllers/productos.controllers.js";
import verifyToken from "../middlewares/verifyToken.js";
import isAdminRole from "../middlewares/isAdminRole.js";
import validateDocuments from "../middlewares/validateDocuments.js";
import { existeCategoria, existeCodigoInterno } from "../helpers/db.validators.js";

const router = Router();

router.get('/', productosController.getAllProductos);
router.get('/:id', productosController.getProductByID);

router.post('/', [
    verifyToken,
    isAdminRole,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('precio', 'El precio es obligatorio').not().isEmpty(),
    check('codigoInterno').custom(existeCodigoInterno),
    check('categoria', 'La categoría es obligatoria').not().isEmpty(),
    check('categoria').custom(existeCategoria),
    validateDocuments
], productosController.postNewProduct);

router.delete('/:id', [
    verifyToken,
    isAdminRole,
    validateDocuments
], productosController.deleteProducto);

router.patch('/:id', [
    verifyToken,
    check('categoria').custom(existeCategoria),
    check('codigoInterno').custom(existeCodigoInterno),
    validateDocuments
], productosController.updateProducto);

export default router;