import { Router } from "express";
import * as serviciosControllers from "../controllers/servicios.controllers.js"

const  router = Router();

router.get('/', serviciosControllers.getAllServicios);
router.get('/:id', serviciosControllers.getServicioByID);
router.post('/', serviciosControllers.postNewServicio);
router.delete('/:id', serviciosControllers.deleteServicio);
router.patch('/:id', serviciosControllers.updateServicio);

export default router;