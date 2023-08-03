import Inventario from "../models/Inventario.js";
import { httpErrors } from "../helpers/handleErrors.js";

export const getInventario = async (req, res) => {
    try {
        const inventarioDB = await Inventario.find({}).populate('producto', '-createdAt -updatedAt');
        res.status(200).json(inventarioDB);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const getItemDeInventarioByID = async (req, res) => {
    try {
        const itemInventario =await Inventario.findOne({_id:req.params.id}).populate('producto', '-createdAt -updatedAt');
        res.status(200).json(itemInventario);
    } catch (err) {
        httpErrors(res, err);
    }
}

