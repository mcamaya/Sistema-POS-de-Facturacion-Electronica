import jwt from "jsonwebtoken";

const generateJWT = (nanoid = '') => {
    return new Promise ((resolve, reject) => {
        const payload = {nanoid};
        jwt.sign(
            payload,
            process.env.PRIVATE_KEY,
            {expiresIn: '12h'},
            (err, token) => {
                err ? reject('No se pudo generar el JWT', err) 
                : resolve(token)
            }
        )
    })
}

export default generateJWT;