import { Schema, model } from "mongoose";
import { nanoid } from "nanoid";

const ProveedorSchema = new Schema({
    _id: {
        type: String,
        required: [true, 'Nanoid failed from model'],
        default: () => nanoid()
    },
    nombre: {
        type: String,
        required: [true, 'Nombre es requerido'],
    },
    numeroDocumento: {
        type: Number,
        unique: true
    },
    tipoDocumento: {
        type: String,
        default: 'NIT',
        ref: 'tipoDocumentos'
    },
    telefono: {
        type: Number,
        required: [true, 'Telefono es requerido']
    },
    activo: {
        type: Boolean,
        default: true
    },
    departamento: String,
    pais: String,
    tipoRegimen: String,
    naturaleza: String
},
{
    versionKey: false,
    timestamps: true
});

export default model('proveedores', ProveedorSchema);