import { Router } from "express";
import searchCollections from "../controllers/search.controllers.js";

const router = Router();

router.get('/:coleccion/:criterio', searchCollections);

export default router;