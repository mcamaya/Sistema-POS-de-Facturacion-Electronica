import { response } from "express";
import generateJWT from "../helpers/createJWT.js";
import Usuario from "../models/Usuario.js";
import { httpErrors } from "../helpers/handleErrors.js";

const login = async (req, res = response, next) => {
   try {
        const {email, password} = req.body;

        //verificar si existe el usuario
        const usuario = await Usuario.findOne({email});
        if(!usuario) return res.status(401).json({msg:`El correo ${email} no está registrado`});

        //verificar si contraseña coincide
        const coincidePwd = await Usuario.comparePassword(password, usuario.password);
        if(coincidePwd === false) return res.status(401).json({msg:`La contraseña es incorrecta. Vuelva a intentarlo`});

        //verificar si se encuentra activo
        if(usuario.activo === false){
            return res.status(401).json({msg:`Este usuario ya no se encuentra activo`});
        }

        const token = await generateJWT(usuario._id);
        res.json({usuario, token});
   } catch (err) {
        httpErrors(res, err)
   }
}

export default login;