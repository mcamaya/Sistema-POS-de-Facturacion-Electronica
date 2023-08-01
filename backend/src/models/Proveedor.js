import { Schema, model } from "mongoose";
import { nanoid } from "nanoid";

const ProveedorSchema = new Schema({
    _id: {
        type: String,
        required: [true, 'Nanoid failed from model'],
        default: nanoid()
    },
    nombre: {
        type: String,
        required: [true, 'Nombre es requerido'],
    },
    numeroDocumento: {
        type: Number,
        unique: true,
    },
    tipoDocumento: {
        type: String,
        default: 'NIT',
        ref: 'tipoDocumentos'
    },
    telefono: {
        type: String,
        required: [true, 'Telefono es requerido']
    },
    departamento: String,
    pais: String,
    tipoRegimen: String,
    naturaleza: String
});

export default model('proveedores', ProveedorSchema);