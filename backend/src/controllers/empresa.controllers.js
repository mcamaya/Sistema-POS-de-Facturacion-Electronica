import Empresa from "../models/Empresa.js";
import { httpErrors } from "../helpers/handleErrors.js";

export const getEmpresa = async (req, res) => {
    try {
        const empresaDB = await Empresa.find();
        res.status(200).json(empresaDB);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const postDataEmpresa = async (req, res) => {
    try {
        const {nombre, nit, encargado, telefono1, telefono2, direccion, tipoRegimen, NumFacturacionInicial, razonSocial} = req.body;
        const postedEmpresa = new Empresa({nombre, nit, encargado, telefono1, telefono2, direccion, tipoRegimen, NumFacturacionInicial, razonSocial});
        postedEmpresa.save();
        res.status(200).json(postedEmpresa);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const updateDataEmpresa = async (req, res) => {
    try {
        const empresa = await Empresa.findOne();
        const updatedEmpresa = Empresa.findOneAndUpdate(
            {_id: empresa._id},
            req.body,
            {new: true}
        );
        res.status(200).json(updatedEmpresa);
    } catch (err) {
        httpErrors(res, err);
    }
}