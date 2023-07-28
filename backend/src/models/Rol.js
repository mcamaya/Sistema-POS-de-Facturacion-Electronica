import { Schema, model } from "mongoose";

const RolSchema = Schema({
    rol: {
        type: String,
        required: [true, 'El rol es obligatorio'],
        
    }
},{
    versionKey: false
});

export default model('roles', RolSchema);