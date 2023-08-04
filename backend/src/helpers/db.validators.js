import Empresa from "../models/Empresa.js";
import Cliente from "../models/Cliente.js";
import Proveedor from "../models/Proveedor.js";
import Usuario from "../models/Usuario.js";
import Rol from "../models/Rol.js";
import Categoria from "../models/Categoria.js";
import Producto from "../models/Producto.js";
import Factura from "../models/Factura.js";

const existeDocumentoCliente = async (numDoc = '') => {
    if(numDoc){
        const existeDocumento = await Cliente.findOne({numeroDocumento:numDoc});
        if(existeDocumento){
            throw new Error('El documento ya está registrado'); 
        }
    }
}

const existeDocumentoProveedor = async (numDoc = '') => {
    if (numDoc){
        const existeDocumento = await Proveedor.findOne({numeroDocumento:numDoc});
        if(existeDocumento){
            throw new Error('El documento ya está registrado'); 
        }
    }
}

const existeRol = async (rol = '') => {
    if(rol){
        const existeRol = await Rol.find({rol});
        if(existeRol == false){
            throw new Error(`El rol '${rol}' no se encuentra registrado en la base de datos.`);
        }
    }
}

const existeCategoria = async (categoria = '') => {
    if(categoria){
        const existeCategoria = await Categoria.findOne({nombre: categoria});
        if(!existeCategoria){
            throw new Error(`La categoria '${categoria}' no se encuentra registrada en la base de datos.`);
        }
    }
}

const existeProveedor = async (proveedor = '') => {
    if(proveedor){
        const existeProveedor = await Proveedor.findOne({nombre: proveedor});
        if(!existeProveedor){
            throw new Error(`El proveedor '${proveedor}' no se encuentra registrada en la base de datos.`);
        }
    }
}

const existeEmailUsuario = async (email = '') => {
    const existeEmail = await Usuario.findOne({email});
    if(existeEmail){
        throw new Error(`El email ya se encuentra registrado. Intente con otro.`);
    }
}

const existeEmpresa = async () => {
    const existeData = await Empresa.find();
    if (existeData) {
        throw new Error('Solo es posible publicar información de una única empresa. Use el método patch para actualizar datos');
    }
}

const existeCodigoInterno = async (codigo = '') => {
    if(codigo){
        const existeCodigo = await Producto.findOne({codigoInterno: codigo});
        if(existeCodigo){
            throw new Error(`El código '${codigo}' ya está asignado a otro producto`);
        }
    }
}

const existeCliente = async (cliente = '') => {
    const existeCliente = await Cliente.findOne({_id:cliente});
    if(!existeCliente){
        throw new Error(`El cliente no está registrado en la base de datos`);
    }
}

const existeNumFactura = async (numeroFactura) => {
    const existeNumFac = await Factura.findOne({numeroFactura});
    if(existeNumFac){
        throw new Error(`El número de factura es repetido`);
    }
}

const existenProductos = (productos) => {
    productos.forEach(async (prd) => {
        console.log(prd);
        let found = await Producto.findOne({_id: prd._id});
        console.log(found);
        if(!found){
            throw new Error(`El producto '${prd._id}' no existe`);
        }
    });
} 

export {
    existeDocumentoCliente,
    existeDocumentoProveedor,
    existeRol,
    existeEmailUsuario,
    existeEmpresa,
    existeCategoria,
    existeProveedor,
    existeCodigoInterno,
    existeCliente,
    existenProductos,
    existeNumFactura
}