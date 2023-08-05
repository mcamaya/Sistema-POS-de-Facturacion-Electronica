import { Router } from "express";
import { check } from "express-validator";
import validateDocuments from "../middlewares/validateDocuments.js";
import authController from "../controllers/auth.controllers.js";

const router = Router();

router.post("/", [
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('email', 'Favor ingresar un email válido').isEmail(),
    validateDocuments
], authController);

export default router;