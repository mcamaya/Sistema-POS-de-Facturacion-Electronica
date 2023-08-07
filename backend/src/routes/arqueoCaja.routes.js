import { Router } from "express";
import { getArqueoCaja } from "../controllers/arqueoCaja.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = Router();

router.post('/', verifyToken, getArqueoCaja);

export default router;