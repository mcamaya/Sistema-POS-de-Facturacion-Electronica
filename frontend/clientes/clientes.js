import { getAll, deleteData } from "./api.js";
import token from "../../../frontend/helpers/getTokenFromCookie.js";
const d = document;

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
                        <a><button uid="${_id}" class="buttoms delete delete-clt"><img uid="${_id}" class="img delete-clt" src="../assets/eliminar.png" alt="delete"></button></a>
                    </td>
                </tr>
            `
        });
    } catch (err) {
        console.log(err);
    }
}


mainTable.addEventListener('click', clienteInactivo);
async function clienteInactivo (e) {
    try {
        if(e.target.classList.contains('delete-clt')){
            const uid = e.target.getAttribute('uid');
            if(confirm('Desea marcar este registro como inactivo?')){
                deleteData(uid, token);
                document.location.reload();
            }
        }
    } catch (err) {
        console.error(err);   
    }
}