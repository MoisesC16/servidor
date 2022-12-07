import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getPedido = async (req, res) =>{
    try {
        const response = await prisma.pedido.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getPedidoById = async (req, res) =>{
    try {
        const response = await prisma.pedido.findUnique({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}

export const createPedido = async (req, res) =>{
    const {fecha, cliente, direccion, producto} = req.body;
    try {
        const pedido = await prisma.pedido.create({
            data:{
                fecha: fecha,
                cliente: cliente,
                direccion: direccion,
                producto: producto
            }
        });
        res.status(201).json(pedido);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updatePedido = async (req, res) =>{
    const {fecha, cliente, direccion, producto} = req.body;
    try {
        const pedido = await prisma.pedido.update({
            where:{
                id: Number(req.params.id)
            },
            data:{
                fecha: fecha,
                cliente: cliente,
                direccion: direccion,
                producto: producto
            }
        });
        res.status(200).json(pedido);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deletePedido = async (req, res) =>{
    try {
        const pedido = await prisma.pedido.delete({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(pedido);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}