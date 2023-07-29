import Usuario from "../models/Usuario.js";
import { httpErrors } from "../helpers/handleErrors.js";
import { nanoid } from "nanoid";
import bcryptjs from "bcryptjs";

const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (err) {
        res.status(400).send(err.message)

    }
}

const getOneUsuario = async (req, res) => {
    try {
        const oneUsuario = await Usuario.findOne({_id:req.params.id});
        res.json(oneUsuario);
    } catch (err) {
        httpErrors(res, err);
    }
}

const postNewUsuario = async (req, res) => {
    try {
        const _id = nanoid();
        const {nombre, email, password, rol} = req.body;
        const newUsuario = await new Usuario({_id, nombre, email, password, rol});

        // password hash
        const salt = bcryptjs.genSaltSync();
        newUsuario.password = bcryptjs.hashSync(password, salt);

        newUsuario.save();
        res.json({status: 'OK', data: newUsuario});
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