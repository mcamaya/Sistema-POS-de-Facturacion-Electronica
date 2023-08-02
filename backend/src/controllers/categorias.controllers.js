import Categoria from "../models/Categoria.js";
import { httpErrors } from "../helpers/handleErrors.js";

export const getAllCategorias = async (req, res) => {
    try {
        const categoriasDB = await Categoria.find();
        res.status(200).json(categoriasDB);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const postNewCategoria = async (req, res) => {
    try {
        const {nombre, descripcion} = req.body;
        const newCategoria = new Categoria({nombre, descripcion});
        newCategoria.save();
        res.status(200).json(newCategoria);
    } catch (err) {
        httpErrors(res, err);
    }
}