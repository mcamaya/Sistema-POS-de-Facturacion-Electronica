import { response } from "express";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario.js";
import { httpErrors } from "../helpers/handleErrors.js";

const login = async (req, res = response) => {
   try {
        const {email, password} = req.body;

        //verificar si existe el usuario
        const usuario = await Usuario.findOne({email});
        if(!usuario) return res.status(400).json(`El correo ${email} no está registrado`);

        //verificar si contraseña coincide
        const coincidePwd = Usuario.comparePassword(password, usuario.password);
        if(coincidePwd === false) return res.status(400).json(`La contraseña es incorrecta. Vuelva a intentarlo`);

        //verificar si se encuentra activo
        if(usuario.activo === false){
            return res.status(400).json(`Este usuario ya no se encuentra activo`);
        }

        const token = jwt.sign({id: usuario._id}, process.env.PRIVATE_KEY, {expiresIn: 3600});

        res.json({token});
        
   } catch (err) {
        httpErrors(res, err)
   }
}

export default login;