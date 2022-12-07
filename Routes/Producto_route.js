import express from "express";
import {
    getProductos,
    getProductoById,
    createProducto,
    updateProducto,
    deleteProducto
} from "../Controllers/Producto_Controller.js";

const router = express.Router();

router.get('/products', getProductos);
router.get('/products/:id', getProductoById);
router.post('/products', createProducto);
router.patch('/products/:id', updateProducto);
router.delete('/products/:id', deleteProducto);

export default router;