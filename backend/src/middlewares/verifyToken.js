import jwt, { decode } from "jsonwebtoken";
import Usuario from "../models/Usuario.js";
import { response, request } from "express";

const verifyToken = async (req = request, res = response, next) => {
    try {
        const token = req.headers['x-auth-token'];  
        if(!token) return res.status(401).json({msg: 'Not token provided'});
    
        const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
        const user = await Usuario.findOne({_id:decoded.nanoid});
        console.log(user);
        if(!user) return res.status(401).json({msg: 'Usuario no encontrado en la base de datos mediante token'});
        
        req.usuario = user;
        console.log(`Usuario token`, req.usuario);
        next();
    } catch (err) {
        return res.status(500).json({msg: 'Acción no autorizada', err});
    }
}

export default verifyToken;
