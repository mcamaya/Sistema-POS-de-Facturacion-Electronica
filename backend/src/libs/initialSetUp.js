import Empresa from "../models/Empresa.js";
import Rol from "../models/Rol.js";

export const createEmpresa = async () => {
    try {
        const count = await Empresa.estimatedDocumentCount();
        if(count > 0) return;
    
        const nuevaEmpresa = new Empresa({
            nombre: 'Nombre Empresa',
            nit: 0,
            encargado: 'Dueño de la empresa',
            telefono1: 0,
            telefono2: 0,
            direccion: 'Dirección',
            tipoRegimen: 'Tipo de Régimen Legal',
            NumFacturacionInicial: 0,
            razonSocial: 'Razón social'
        });
    
        nuevaEmpresa.save();
        console.log(nuevaEmpresa);
        
    } catch (error) {
        console.log(error);
    }
}

export const createRoles = async () => {
    try {
        const count = await Rol.estimatedDocumentCount();
        if(count > 0) return;
        
        const roles = await Promise.all([
            new Rol({rol: 'USER'}).save(),
            new Rol({rol: 'ADMIN'}).save()
        ])

        console.log(roles);
    } catch (error) {
        console.log(error);
    }
}