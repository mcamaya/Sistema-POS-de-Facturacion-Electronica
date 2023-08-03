import { Schema, model } from "mongoose";
import { nanoid } from "nanoid";

const EmpresaSchema = new Schema({
    _id: {
        type: String,
        required: [true, 'Nanoid failed from model'],
        default: () => nanoid()
    },
    nombre: {
        type: String,
        required: true
    },
    nit: {
        type: Number,
        required: true
    },
    encargado: {
        type: String,
        required: true
    },
    telefono1:{
        type: Number,
        required: true
    },
    telefono2: Number,
    direccion: String,
    tipoRegimen: String,
    NumFacturacionInicial: Number,
    razonSocial: String
},{
    versionKey: false,
    timestamps: true
});

export default model('empresa', EmpresaSchema);