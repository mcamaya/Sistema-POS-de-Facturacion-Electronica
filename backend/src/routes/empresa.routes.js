import { Router } from "express";
import { check } from "express-validator";
import Empresa from "../models/Empresa.js";
import * as empresaController from "../controllers/empresa.controllers.js";
import validateDocuments from "../middlewares/validateDocuments.js";

const router = Router();

router.get('/', empresaController.getEmpresa);
router.post('/', [
    check('*').custom(async () => {
        const existeData = await Empresa.find();
        if (existeData) {
            throw new Error('Solo es posible publicar información de una única empresa. Use el método patch para actualizar datos');
        }
    }),
    validateDocuments
], empresaController.postDataEmpresa);
router.patch('/', empresaController.updateDataEmpresa);

export default router;