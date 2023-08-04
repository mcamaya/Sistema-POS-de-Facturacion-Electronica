import { Schema, model } from "mongoose";
import { nanoid } from "nanoid";

const ServicioSchema = new Schema({
    _id: {
        type: String,
        required: [true, 'Nanoid failed from model'],
        default: () => nanoid()
    },
    nombre: {
        type: String,
        required: [true, 'El nombre del servicio es obligatorio'],
        trim: true
    },
    precio: {
        type: Number,
        required: [true, 'Precio es obligatorio']
    },
    categoria: {
        type: String,
        ref: 'categorias',
        required: [true, 'Indicar la categoría es obligatorio']
    },
    activo: {
        type: Boolean,
        default: true
    },
    descripcion: String,
    duracion: String
}, {
    versionKey: false
});

export default model('servicios', ServicioSchema);