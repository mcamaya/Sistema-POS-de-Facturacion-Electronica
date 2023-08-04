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
        const savedUser = await newUsuario.save();
        res.status(200).json({savedUser});
    } catch (err) {
        httpErrors(res, err);
    }
}

export const deleteUsuario = async (req, res) => {
    try {
        const inactivo = await Usuario.findOneAndUpdate({_id:req.params.id}, {activo: false, rol: 'USER'}, {new:true});
        res.json({msg:'Usuario marcado como inactivo', inactivo});
    } catch (err) {
        httpErrors(res, err);
    }
}

export const updateUsuario = async (req, res) => {
    try {
        const {password, ...resto} = req.body;
        if(password){
            resto.password = await Usuario.encryptPassword(password)
        }
        
        const updatedUsuario = await Usuario.findOneAndUpdate(
            {_id:req.params.id},
            resto,
            {new:true}
        );
        res.json({updatedUsuario});
    } catch (err) {
        httpErrors(res, err);
    }
}
