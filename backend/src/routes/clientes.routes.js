import { Router } from "express";
import * as clientesController from "../controllers/clientes.controllers.js";
import clientesValidator from "../middlewares/clientes.validation.js";

const router = Router();

router.get('/', clientesController.getClientes);
router.get('/:id', clientesController.getClienteByID);
router.post('/', clientesValidator, clientesController.postNewCliente);
router.delete('/:id', clientesController.deleteCliente);
router.patch('/:id', clientesController.updateCliente);

export default router;