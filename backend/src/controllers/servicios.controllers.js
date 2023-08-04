import Servicio from "../models/Servicio.js";
import { httpErrors } from "../helpers/handleErrors.js";

export const getAllServicios = async (req, res) => {
    try {
        const serviciosDB = await Servicio.find();
        res.status(200).json(serviciosDB);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const getServicioByID = async (req, res) => {
    try {
        const servicioDB = await Servicio.findOne({_id:req.params.id});
        res.status(200).json(servicioDB);
    } catch (err) {
        httpErrors(res, err);
    }
}

export const postNewServicio = async (req, res) => {
    try {
        const {nombre, precio, categoria, descripcion, duracion} = req.body;
        const newServicio = new Servicio({nombre, precio, categoria, descripcion, duracion});
        newServicio.save();
        res.status(200).json(newServicio);
    } catch (err) {
        httpErrors(res, err);cd
    }
}

export const deleteServicio = async(req, res) => {
    try {
        const deletedServicio = await Servicio.findOneAndUpdate({_id:req.params.id}, {activo: false}, {new:true});
        res.status(200).json({msg: 'Servicio marcado como inactivo', deletedServicio});
    } catch (err) {
        httpErrors(res, err);
    }
}

export const updateServicio = async (req, res) => {
    try {
        const updatedServicio = await Servicio.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new: true}
        )
        res.status(200).json(updatedServicio);
    } catch (err) {
        httpErrors(res, err);
    }
}