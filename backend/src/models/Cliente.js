import { Schema, model } from "mongoose";
import { nanoid } from "nanoid";

const ClienteSchema = new Schema({
    _id: {
        type: String,
        required: [true, 'Nanoid failed from model'],
        default: () => nanoid()
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true
    },
    numeroDocumento: {
        type: Number,
        required: [true, 'El N° de documento es obligatorio'],
        trim: true,
        unique: true
    },
    tipoDocumento: {
        type: String,
        default: 'Cédula de Ciudadanía',
        ref: 'tipoDocumentos'
    },
    activo: {
        type: Boolean,
        default: true
    },
    celular: Number,
    email: String,
    direccion: String
},
{
    timestamps: true,
    versionKey: false
})

export default model('clientes', ClienteSchema);