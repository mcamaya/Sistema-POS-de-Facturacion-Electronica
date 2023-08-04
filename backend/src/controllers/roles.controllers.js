import Rol from "../models/Rol.js";
import { httpErrors } from "../helpers/handleErrors.js";

export const getAllRoles = async (req, res) => {
    try {
        const allRoles = await Rol.find();
        res.json(allRoles);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const getOneRol = async (req, res) => {
    try {
        const oneRol = await Rol.findOne({_id:req.params.id});
        res.json(oneRol);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const postNewRol = async(req, res) => {
    try {
        const {rol} = req.body;
        const newRol = await new Rol({rol});
        newRol.save();
        res.json(newRol);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const deleteRoles = async (req, res) => {
    try {
        await Rol.deleteOne({_id: req.params.id});
        res.json({status: 'OK', data: `Dato eliminado con éxito`});
    } catch (err) {
        httpErrors(res, err);
    }
}
