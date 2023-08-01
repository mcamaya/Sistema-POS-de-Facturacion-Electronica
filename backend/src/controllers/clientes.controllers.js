import Cliente from "../models/Cliente.js";
import { httpErrors } from "../helpers/handleErrors.js";

export const getClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.status(200).json(clientes);
    } catch (err) {
        httpErrors(res, err)
    }
}

export const getClienteByID = async (req, res) => {
    try {
        const cliente = await Cliente.findById({_id:req.params.id});
        res.status(200).json(cliente);
    } catch (err) {
        httpErrors(res, err)
    }
}

export const postNewCliente = async (req, res) => {
    try {
        const {nombre, numeroDocumento, tipoDocumento, celular, email, direccion} = req.body;
        const newCliente =  new Cliente({nombre, numeroDocumento, tipoDocumento, celular, email, direccion});
        await newCliente.save();
        res.status(200).json(newCliente);
    } catch (err) {
        httpErrors(res, err)
    }
}

export const deleteCliente = async (req, res) => {
    try {
       await Cliente.findByIdAndDelete({_id: req.params.id});
       res.status(200).json({msg: 'Dato eliminado con éxito'});
    } catch (err) {
        httpErrors(res, err)
    }
}

export const updateCliente = async (req, res) => {
    try {
        const updatedCliente = await Cliente.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );
        res.status(200).json(updatedCliente);
    } catch (err) {
        httpErrors(res, err)
    }
}

