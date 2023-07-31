import { Schema, model } from "mongoose";

const RolSchema = Schema({
    _id: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: [true, 'El rol es obligatorio']
    }
},{
    versionKey: false
});

export default model('roles', RolSchema);