import Rol from "../models/Rol.js"

const getRoles = async (req, res) => {
    const roles = await Rol.find();
    res.json(roles);
}

const getOneRol = async (req, res) => {
    try {
        const {id} = req.params.id;
        const rol = await Rol.findOne({id});
        res.json(rol);
    } catch (err) {
        res.status(400).send(err.message);
    }
}

const postRoles = async(req, res) => {
    try {
        const {rol} = req.body;
        const nuevoRol = new Rol({rol});
        nuevoRol.save()
        res.json(nuevoRol)
    } catch (err) {
        res.status(400).send(err.message);
    }
}

const deleteRoles = async (req, res) => {
    const {id} = req.params.id;
    const eliminado = await Rol.deleteOne({id});
    res.json(eliminado)
}

export {
    getRoles,
    getOneRol,
    postRoles,
    deleteRoles
}