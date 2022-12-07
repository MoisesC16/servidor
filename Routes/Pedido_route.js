import express from "express";
import {
    getPedido,
    getPedidoById,
    createPedido,
    updatePedido,
    deletePedido
} from "../Controllers/Pedido_Controller.js";

const router = express.Router();

router.get('/pedidos', getPedido);
router.get('/pedidos/:id', getPedidoById);
router.post('/pedidos', createPedido);
router.patch('/pedidos/:id', updatePedido);
router.delete('/pedidos/:id', deletePedido);

export default router;