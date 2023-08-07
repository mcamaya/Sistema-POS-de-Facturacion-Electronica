import { getAll } from "./api.js";
const d = document;

const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("auth="))
    ?.split("=")[1];

const mainTable = d.querySelector('#main-table');
addEventListener('DOMContentLoaded', cargarTabla);

function existeRegistro(dato){
    if(dato){ return dato } else { return "" }
}

async function cargarTabla(){
    try {
        const clientes = await getAll();
        console.log(clientes);
        clientes.forEach(clt => {
            let {_id, nombre, numeroDocumento, celular, email} = clt;
            mainTable.innerHTML += `
                <tr>
                    <td class="bording"><p class="body_text">${nombre}</p></td>
                    <td class="bording"><p class="body_text">${numeroDocumento}</p></td>
                    <td class="bording"><p class="body_text">${existeRegistro(celular)}</p></td>
                    <td class="bording"><p class="body_text">${existeRegistro(email)}</p></td>
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



