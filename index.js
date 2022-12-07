import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Producto_Route from "./Routes/Producto_route.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(Producto_Route);

app.listen(process.env.APP_PORT, ()=>{
    console.log('Servidor Listo...');
});