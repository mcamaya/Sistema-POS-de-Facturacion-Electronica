import { getAll } from "./api.js";
import token from "../helpers/getTokenFromCookie.js";
const d = document;

const mainTable = d.querySelector('#main-table');
addEventListener('DOMContentLoaded', cargarTabla);

async function cargarTabla(){
    try {
        const facturas = await getAll(token);
        console.log(facturas);
        facturas.forEach(fct => {
            let {_id, clienteId, numeroFactura, fecha, descuento} = fct;
            mainTable.innerHTML += `
                <tr>
                    <td class="bording"><p class="body_text">${numeroFactura}</p></td>
                    <td class="bording"><p class="body_text">${clienteId.nombre}</p></td>
                    <td class="bording"><p class="body_text">${fecha}</p></td>
                    <td class="bording"><p class="body_text">${descuento}</p></td>
                </tr>
            `
        });
    } catch (err) {
        console.log(err);
    }
}

