import { Router } from "express";
import * as clientesController from "../controllers/clientes.controllers.js";

const router = Router();

router.get('/', clientesController.getClientes);
router.get('/:id', clientesController.getClienteByID);
router.post('/', clientesController.postNewCliente);
router.delete('/:id', clientesController.deleteCliente);
router.patch('/:id', clientesController.updateCliente);

export default router;