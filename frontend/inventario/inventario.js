import { getAll, postNewData } from "./api.js";
const d = document;

const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("auth="))
    ?.split("=")[1];

const mainTable = d.querySelector('#main-table');
addEventListener('DOMContentLoaded', cargarInventario);

async function cargarInventario(){
    try {
        const inventario = await getAll();
        console.log(inventario);
        inventario.forEach(inv => {
            let {producto, stockDisponible, stockMinimo} = inv;
            mainTable.innerHTML += `
                <tr>
                    <td>${producto.nombre}</td>
                    <td class="td-center">$${producto.precio.toLocaleString()}</td>
                    <td class="td-center">${stockDisponible}</td>
                    <td class="td-center">${stockMinimo}</td>
                    <td class="td-center"></td>
                </tr>
            `
        });
    } catch (err) {
        console.log(err);
    }
}

