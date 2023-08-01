import { Schema, model } from "mongoose";
import { nanoid } from "nanoid";

const TipoDocumentoSchema = new Schema ({
    _id: {
        type: String,
        default: nanoid(),
        required: [true, 'Nanoid is failing']
    },
    tipoDoc: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
})

export default model('tipoDocumentos', TipoDocumentoSchema);