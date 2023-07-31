import { Schema, model } from "mongoose";
import bcryptjs from "bcryptjs";

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
    versionKey: false,
    timestamps: true
});

UsuarioSchema.statics.encryptPassword = (password) => {
    const salt = bcryptjs.genSaltSync(10);
    return bcryptjs.hashSync(password, salt);
}

UsuarioSchema.statics.comparePassword = (password, receivedPassword) => {
    return bcryptjs.compareSync(password, receivedPassword)
}

export default model('usuarios', UsuarioSchema);