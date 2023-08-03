import { Schema, model } from "mongoose";
import { nanoid } from "nanoid";

const InventarioSchema = new Schema({
    _id: {
        type: String,
        required: [true, 'Nanoid failed from model'],
        default: () => nanoid()
    },
    producto: {
        type: String,
        required: true,
        ref: 'productos'
    },
    stockDisponible: {
        type: Number,
        required: true,
        default: 0
    },
    stockMinimo: Number
}, {
    versionKey: false,
    timestamps: true
});

export default model('inventario', InventarioSchema);