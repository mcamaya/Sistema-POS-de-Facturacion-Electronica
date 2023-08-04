import { Schema, model } from "mongoose";
import { nanoid } from "nanoid";

const CategoriaSchema = new Schema({
    _id: {
        type: String,
        required: [true, 'Nanoid failed from model'],
        default: () => nanoid()
    },
    nombre: {
        type: String,
        required: [true, 'El nombre de la categoría es obligatorio'],
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    }
},{
    versionKey: false
});

export default model('categorias', CategoriaSchema);