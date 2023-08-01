import { Router } from "express";
import * as docTypeController from "../controllers/tipoDocumentos.controllers.js";

const router = Router();

router.get('/', docTypeController.getDocTypes);
router.post('/', docTypeController.postDocTypes);

export default router;