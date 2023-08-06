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
            let {_id, producto, stockDisponible, stockMinimo} = inv;
            mainTable.innerHTML += `
                <tr>
                    <td class="bording"><p class="body_text">${producto.nombre}</p></td>
                    <td class="bording"><p class="body_text">$${producto.precio.toLocaleString()}</p></td>
                    <td class="bording"><p class="body_text">${stockDisponible}</p></td>
                    <td class="bording"><p class="body_text">${stockMinimo}</p></td>
                    <td class="bording images">
                        <a href="./actions/editar.html?id=${_id}"><button class="buttoms edit"><img class="img" src="../assets/lapiz.png" alt="edit"></button></a>
                        <a href=""><button class="buttoms delete"><img class="img" src="../assets/eliminar.png" alt="delete"></button></a>
                    </td>
                </tr>
            `
        });
    } catch (err) {
        console.log(err);
    }
}

