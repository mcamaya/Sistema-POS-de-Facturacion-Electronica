import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario.js";

const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers['x-auth-token'];
        console.log(token);
    
        if(token == false) return res.status(401).json({msg: 'Not token provided'});
    
        const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
        req.userId = decoded.id;
    
        const usuario = await Usuario.findById(req.userId);
        if(!usuario) return res.status(401).json({msg: 'Usuario no encontrado'});
    
        next();
    } catch (err) {
        return res.status(500).json({msg: 'Acción no autorizada'});
    }
}

export default verifyToken;
