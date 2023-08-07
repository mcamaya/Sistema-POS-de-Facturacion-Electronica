import Factura from "../models/Factura.js";
import { httpErrors } from "../helpers/handleErrors.js";

export const getArqueoCaja = async (req, res) => {
    try {
        const data = await Factura.find({fecha: req.body.fecha});
        req.status(200).json(data);
    } catch (err) {
        httpErrors(res, err);
    }
}