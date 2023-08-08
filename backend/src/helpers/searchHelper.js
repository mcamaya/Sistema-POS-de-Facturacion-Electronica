import { response } from "express";
import Cliente from "../models/Cliente.js";
import Proveedor from "../models/Proveedor.js";
import Producto from "../models/Producto.js";
import Factura from "../models/Factura.js";
import { httpErrors } from "./handleErrors.js";

export const searchCliente = async (criterio, res = response) => {
    try {
        const regex = new RegExp( criterio, 'i' );
        const data = await Cliente.find({
            $or: [{nombre: regex}]
        })
        res.json({result: data});
    } catch (err) {
        httpErrors(res, err)
    }
}

export const searchProveedor = async (criterio = '', res = response) => {
    try {
        const regex = new RegExp( criterio, 'i' );
        const data = await Proveedor.find({
            $or: [{_id: regex}, {nombre: regex}]
        })
        res.json({result: data});
    } catch (err) {
        httpErrors(res, err)
    }
}


export const searchProducto = async (criterio = '', res = response) => {
    try {
        const regex = new RegExp( criterio, 'i' );
        const data = await Producto.find({
            $or: [{_id: regex}, {nombre: regex}, {codigoInterno: regex}]
        })
        res.json({result: data});
    } catch (err) {
        httpErrors(res, err)
    }
}

export const searchFacturas = async (criterio = '', res = response) => {
    try {
        const regex = new RegExp( criterio, 'i' );
        const data = await Factura.find({
            $or: [{fecha: regex}, {clienteId: regex}]
        }).populate('clienteId', 'nombre numeroDocumento')
        res.json({result: data});
    } catch (err) {
        httpErrors(res, err)
    }
}