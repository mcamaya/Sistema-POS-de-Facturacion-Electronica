import { searchCliente, searchProducto, searchProveedor, searchFacturas } from "../helpers/searchHelper.js";
import { httpErrors } from "../helpers/handleErrors.js";

const notAllowedCollections = [
    'empresa'
];

const searchCollections = (req, res) => {
    try {
        const {coleccion, criterio} = req.params;
        if(notAllowedCollections.includes(coleccion)) {
            return res.status(400).json({msg: `NO se permite la búsqueda en las siguientes colecciones ${notAllowedCollections}`});
        }

        switch (coleccion) {
            case 'clientes':
                searchCliente(criterio,res);
                break;
            case 'productos':
                searchProducto(criterio, res);
                break;
            case 'proveedores':
                searchProveedor(criterio,res);
                break;
            case 'facturas':
                searchFacturas(criterio, res);
                break;
            default:
                res.status(400).json({msg: 'Esta colección no está disponible'})
        }

    } catch (err) {
        httpErrors(res, err)
    }
}

export default searchCollections;