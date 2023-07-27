import rolesDB from "../services/roles.services.js";

const getAllRoles = async (req, res) => {
    const allRoles = await rolesDB.getRoles();
    res.json(allRoles);
}

const getOneRol = async (req, res) => {
    try {
        const oneRol = await rolesDB.getOneRol({_id:req.params.id});
        res.json(oneRol);
    } catch (err) {
        res.status(400).send(err.message);
    }
}

const postNewRol = async(req, res) => {
    try {
        const {rol} = req.body;
        rolesDB.postRoles({rol});
        res.json({status: "OK", data: {rol}});
    } catch (err) {
        res.status(400).send(err.message);
    }
}

const deleteRoles = async (req, res) => {
    const {id} = req.params.id;
    rolesDB.deleteRol(id);
    res.json({status: 'OK', data: `Dato eliminado con éxito`});
}

export default {
    getAllRoles,
    getOneRol,
    postNewRol,
    deleteRoles
}