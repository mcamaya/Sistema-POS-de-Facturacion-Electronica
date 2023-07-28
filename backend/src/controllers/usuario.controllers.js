import Usuario from "../models/Usuario.js";
import { httpErrors } from "../helpers/handleErrors.js";

const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json({status: 'OK', data: usuarios});
    } catch (err) {
        httpErrors(res, err);
    }
}

const getOneUsuario = async (req, res) => {
    try {
        const oneUsuario = await Usuario.findOne({_id:req.params.id});
        res.json({status: 'OK', data: oneUsuario});
    } catch (err) {
        httpErrors(res, err);
    }
}

const postNewUsuario = async (req, res) => {
    try {
        const {nombre, email, password, rol, estado} = req.body;
        const newUsuario = await new Usuario({nombre, email, password, rol, estado});
        newUsuario.save();
        res.json({status: 'OK', data: newUsuario})
    } catch (err) {
        httpErrors(res, err);
    }
}

const deleteUsuario = async (req, res) => {
    try {
        await Usuario.deleteOne({_id:req.params.id});
        res.json({status: 'OK', msg:'Dato eliminado con éxito'});
    } catch (err) {
        httpErrors(res, err);
    }
}

const updateUsuario = async (req, res) => {
    try {
        const updatedUsuario = await Usuario.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );
        res.json({status: 'OK', data: updatedUsuario});
    } catch (err) {
        httpErrors(res, err);
    }
}

export default {
    getAllUsuarios,
    getOneUsuario,
    postNewUsuario,
    deleteUsuario,
    updateUsuario
}