import TipoDocumento from "../models/TipoDocumento.js";

export const getDocTypes = async (req, res) => {
    const result = await TipoDocumento.find();
    res.status(200).json(result);
}

export const postDocTypes = async (req, res) => {
    const {_id, tipoDoc} = req.body;
    const newDocType = new TipoDocumento({_id, tipoDoc});
    await newDocType.save();
    res.status(200).json(newDocType);
}