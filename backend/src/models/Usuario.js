import { Schema, model } from "mongoose";

const UsuarioSchema = Schema({
    _id: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
        trim: true
    },
    rol: {
        type: String,
        default: 'USER'
    },
    activo: {
        type: Boolean,
        default: true
    }
}, {
    versionKey: false
});

export default model('usuarios', UsuarioSchema);