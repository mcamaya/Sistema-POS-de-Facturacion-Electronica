import { Router } from "express";
import authController from "../controllers/auth.controllers.js";
import authValidation from "../middlewares/auth.validation.js";

const router = Router();

router.post("/", authValidation, authController);

export default router;