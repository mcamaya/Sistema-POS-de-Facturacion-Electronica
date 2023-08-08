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
        type: Object,
        required: true,
        ref: 'productos'
    }],
    fecha: {
        type: String,
        required: true
    },
    iva: {
        type: Number,
        required: true,
        default: 19
    },
    descuento: {
        type: Number,
        default: 0
    },
    impuestoAdicional: Number
}, {
    versionKey: false
});

export default model('facturas', FacturaSchema);