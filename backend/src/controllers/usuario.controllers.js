import Usuario from "../models/Usuario.js";
import { httpErrors } from "../helpers/handleErrors.js";
import jwt from "jsonwebtoken";

export const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const getOneUsuario = async (req, res) => {
    try {
        const oneUsuario = await Usuario.findOne({_id:req.params.id});
        res.status(200).json(oneUsuario);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const postNewUsuario = async (req, res) => {
    try {
        const {nombre, email, password, rol} = req.body;
        const newUsuario = await new Usuario(
            {
                nombre, 
                email, 
                password: Usuario.encryptPassword(password), 
                rol
            }
        );

        const token = jwt.sign({id: newUsuario._id}, process.env.PRIVATE_KEY, {expiresIn: 3600});

        const savedUser = await newUsuario.save();
        res.status(200).json({status: 'OK', data: savedUser, token});
    } catch (err) {
        httpErrors(res, err);
    }
}

export const deleteUsuario = async (req, res) => {
    try {
        await Usuario.deleteOne({_id:req.params.id});
        res.json({msg:'Dato eliminado con éxito'});
    } catch (err) {
        httpErrors(res, err);
    }
}

export const updateUsuario = async (req, res) => {
    try {
        const updatedUsuario = await Usuario.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );
        res.json({updatedUsuario});
    } catch (err) {
        httpErrors(res, err);
    }
}
