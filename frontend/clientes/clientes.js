import { getAll } from "./api.js";
const d = document;

const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("auth="))
    ?.split("=")[1];

const mainTable = d.querySelector('#main-table');
addEventListener('DOMContentLoaded', cargarTabla);

async function cargarTabla(){
    try {
        const clientes = await getAll();
        console.log(clientes);
        clientes.forEach(clt => {
            let {nombre, numeroDocumento, celular, email} = clt;
            mainTable.innerHTML += `
                <tr>
                    <td>${nombre}</td>
                    <td class="td-center">${numeroDocumento}</td>
                    <td class="td-center">${celular}</td>
                    <td class="td-center">${email}</td>
                    <td class="td-center d-flex justify-content-around">
                        <a href="" class="btn btn-outline-primary"><i class="bi bi-pencil-fill"></i></a>
                        <a href="" class="btn btn-outline-danger"><i class="bi bi-x-circle-fill"></i></a>
                    </td>
                </tr>
            `
        });
    } catch (err) {
        console.log(err);
    }
}

