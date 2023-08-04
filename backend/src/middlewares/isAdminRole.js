
const isAdminRole = async (req, res, next) => {
    try {
        if(!req.usuario) return res.status(400).json({msg: 'Se requiere autenticar token para verificar permisos'});
        const {rol, nombre} = req.usuario;
        nombre.toUpperCase();

        if(rol !== 'ADMIN') return res.status(400).json({msg: `El usuario '${nombre}' no es admin`});

        next();
    } catch (error) {
        res.send(error);
    }
}

export default isAdminRole;