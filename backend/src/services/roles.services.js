import Rol from "../models/Rol.js";

const getRoles = async () => {
    const rolesDB = await Rol.find();
    return rolesDB;
}

const getOneRol = async (idRol) => {
    const oneRol = await Rol.findOne(idRol);
    return oneRol;
}

const postRoles = async (newData) => {
    const newRol = new Rol(newData);
    newRol.save();
}

const deleteRol = async (idRol) => {
    const deletedRol = await Rol.deleteOne({idRol});
    return deletedRol;
}

export default {
    getRoles,
    getOneRol,
    postRoles,
    deleteRol
}