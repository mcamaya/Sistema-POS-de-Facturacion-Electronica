import { searchRegistros } from "./api.js";
import obtenerFechaActual from "../helpers/obtenerFecha.js";
const d = document;
const searchBtn = d.querySelector('#searchBtn');
const tableBody = d.querySelector('#main-table');

d.querySelector('#searchInput').value = obtenerFechaActual();

searchBtn.addEventListener('click', buscarArqueoCaja);

async function buscarArqueoCaja(e) {
    e.preventDefault();
    tableBody.innerHTML = '';
    const query = d.querySelector('#searchInput').value;
    const {result} = await searchRegistros(query);

    if(result.length > 0){
        
        result.forEach(fct => {
            let {_id, numeroFactura, clienteId, fecha, iva, descuento} = fct;
            tableBody.innerHTML+= `
            <tr class="factura-data">
                <td class="bording factura-data"><p class="body_text">${numeroFactura}</p></td>
                <td class="bording factura-data"><p class="body_text">${clienteId.nombre}</p></td>
                <td class="bording factura-data"><p class="body_text">${fecha}</p></td>
                <td class="bording factura-data"><p class="body_text">${descuento}</p></td>
            </tr>
            `
        });
    } else {
        cltTableBody.innerHTML+= '<h5 class="m-4">No coincidencias encontradas</h5>'
    }
}

