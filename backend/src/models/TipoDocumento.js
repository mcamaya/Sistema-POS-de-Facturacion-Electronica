import { Schema, model } from "mongoose";
import { nanoid } from "nanoid";

const TipoDocumentoSchema = new Schema ({
    _id: {
        type: String,
        required: [true, 'Nanoid failed from model'],
        default: () => nanoid()
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