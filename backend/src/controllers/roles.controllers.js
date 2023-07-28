import Rol from "../models/Rol.js";
import { httpErrors } from "../helpers/handleErrors.js";

const getAllRoles = async (req, res) => {
    try {
        const allRoles = await Rol.find();
        res.json({status: 'OK', data: allRoles});
    } catch (err) {
        httpErrors(res, err);
    }
}

const getOneRol = async (req, res) => {
    try {
        const oneRol = await Rol.findOne({_id:req.params.id});
        res.json({status: 'OK', data: oneRol});
    } catch (err) {
        httpErrors(res, err);
    }
}

const postNewRol = async(req, res) => {
    try {
        const {rol} = req.body;
        const newRol = new Rol({rol});
        newRol.save();
        res.json({status: "OK", data: rol});
    } catch (err) {
        httpErrors(res, err);
    }
}

const deleteRoles = async (req, res) => {
    try {
        await Rol.deleteOne({_id: req.params.id});
        res.json({status: 'OK', data: `Dato eliminado con éxito`});
    } catch (err) {
        httpErrors(res, err);
    }
}

const updateRol = async (req, res) => {
    try {
        const updatedRol = await Rol.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );
        res.json({status: 'OK', data: updatedRol});
    } catch (err) {
        httpErrors(res, err);
    }
}

export default {
    getAllRoles,
    getOneRol,
    postNewRol,
    deleteRoles,
    updateRol
}