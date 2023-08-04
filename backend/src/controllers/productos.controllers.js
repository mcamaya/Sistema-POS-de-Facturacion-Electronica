import Producto from "../models/Producto.js";
import Inventario from "../models/Inventario.js";
import { httpErrors } from "../helpers/handleErrors.js";

export const getAllProductos = async (req, res) => {
    try {
        const productosdDB = await Producto.find().populate('proveedor');
        res.status(200).json(productosdDB);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const getProductByID = async (req, res) => {
    try {
        const productoDB = await Producto.findOne({_id: req.params.id}).populate('proveedor');
        res.status(200).json(productoDB);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const postNewProduct = async (req, res) => {
    try {
    const {nombre, precio, codigoInterno, categoria, activo, proveedor, descripcion, iva, impuestoAdicional, stockMinimo, stockDisponible} = req.body;
    const newProduct = new Producto({nombre, precio, codigoInterno, categoria, activo, proveedor, descripcion, iva, impuestoAdicional});
    await newProduct.save();

    const newItemInventario = new Inventario({producto: newProduct._id, stockMinimo, stockDisponible});
    await newItemInventario.save();

    res.status(200).json({newProduct, newItemInventario});
    } catch (err) {
        httpErrors(res, err);
    }
}

export const deleteProducto = async (req, res) => {
    try {
        const deletedProducto = await Producto.findOneAndUpdate(
            {_id: req.params.id},
            {activo: false},
            {new: true}
        );

        res.status(200).json({msg: 'Producto marcado como inactivo', deletedProducto});
    } catch (err) {
        httpErrors(res, err);
    }
}

export const updateProducto = async (req, res) => {
    try {
        const updatedProducto = await Producto.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );
        res.status(200).json(updatedProducto);
    } catch (err) {
        httpErrors(res, err);
    }
}