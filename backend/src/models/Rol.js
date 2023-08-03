import { Schema, model } from "mongoose";
import { nanoid } from "nanoid";

const RolSchema = Schema({
    _id: {
        type: String,
        required: [true, 'Nanoid failed from model'],
        default: () => nanoid()
    },
    rol: {
        type: String,
        required: [true, 'El rol es obligatorio']
    }
},{
    versionKey: false
});

export default model('roles', RolSchema);