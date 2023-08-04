import { Schema, model } from "mongoose";
import { nanoid } from "nanoid";

const FacturaSchema = new Schema({
    _id: {
        type: String,
        required: [true, 'Nanoid failed from model'],
        default: () => nanoid()
    },
    numeroFactura: {
        type: Number,
        required: true
    },
    clienteId: {
        type: String,
        required: true,
        ref: 'clientes',
        trim: true
    },
    productosIds: [{
        type: String,
        required: true,
        ref: 'productos'
    }],
    fecha: {
        type: String,
        required: true,
        default: () => {
            const date = new Date();
            return date.getFullYear();
        }
    },
    iva: {
        type: Number,
        required: true,
        default: 19
    },
    descuento: Number,
    impuestoAdicional: Number
}, {
    versionKey: false,
    timestamps: true
});

export default model('facturas', FacturaSchema);