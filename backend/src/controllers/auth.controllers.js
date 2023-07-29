import { response } from "express";
import bcryptjs from "bcryptjs";
import Usuario from "../models/Usuario.js";
import { httpErrors } from "../helpers/handleErrors.js";

const login = async (req, res = response) => {
   try {
        const {email, password} = req.body;

        //verificar si existe el usuario
        const usuario = await Usuario.findOne({email});
        if(!usuario){
            return res.status(400).json(`El correo ${email} no está registrado`);
        }

        //verificar si contraseña coincide
        const coincidePwd = bcryptjs.compareSync(password, usuario.password);
        if(coincidePwd === false){
            return res.status(400).json(`La contraseña es incorrecta. Vuelva a intentarlo`);
        }

        //verificar si se encuentra activo
        if(usuario.activo === false){
            return res.status(400).json(`Este usuario ya no se encuentra activo`);
        }

        res.json({msg: "Todo bien, autenticación aprovada"});
        
   } catch (err) {
        httpErrors(res, err)
   }
}

export default login;