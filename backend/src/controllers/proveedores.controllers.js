import Proveedor from "../models/Proveedor.js";
import { httpErrors } from "../helpers/handleErrors.js";

export const getProveedores = async (req, res) => {
    try {
        const proveedoresDB = await Proveedor.find();
        res.status(200).json(proveedoresDB);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const getProveedorByID = async (req, res) => {
    try {
        const proveedorDB = await Proveedor.find({_id:req.params.id});
        res.status(200).json(proveedorDB);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const postNewProveedor = async (req, res) => {
    try {
        const {nombre, numeroDocumento, tipoDocumento, telefono, departamento, pais, tipoRegimen, naturaleza} = req.body;
        const newProveedor = await Proveedor({nombre, numeroDocumento, tipoDocumento, telefono, departamento, pais, tipoRegimen, naturaleza});
        await newProveedor.save();
        res.status(200).json(newProveedor);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const deleteProveedorByID = async (req, res) => {
    try {
        const deletedProveedor = await Proveedor.findOneAndUpdate({_id:req.params.id}, {activo: false}, {new:true});
        res.status(200).json({msg: 'Proveedor marcado como inactivo', deletedProveedor});
    } catch (err) {
        httpErrors(res, err);
    }
}

export const updateProveedorByID = async (req, res) => {
    try {
        const updatedProveedor = await Proveedor.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        )
        res.status(200).json(updatedProveedor);
    } catch (err) {
        httpErrors(res, err);
    }
}