import { Schema, model } from "mongoose";
import { nanoid } from "nanoid";

const ProductoSchema = new Schema({
    _id: {
        type: String,
        required: [true, 'Nanoid failed from model'],
        default: () => nanoid()
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es olbigatorio'],
        trim: true
    },
    precio: {
        type: Number,
        required: [true, 'El precio es obligatorio']
    },
    codigoInterno: {
        type: String,
        unique: [true, 'Este código debe ser único e irrepetible'],
        trim: true
    },
    categoria: {
        type: String,
        required: true,
        ref: 'categorias'
    },
    activo: {
        type: Boolean,
        default: true
    },
    proveedor: {
        type: String,
        ref: 'proveedores'
    },
    descripcion: String,
    iva: Number,
    impuestoAdicional: Number
}, {
    versionKey: false,
    timestamps: true
});

export default model('productos', ProductoSchema);