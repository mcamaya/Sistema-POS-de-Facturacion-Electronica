import { postNewData } from "../api.js";

const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("auth="))
    ?.split("=")[1];

const saveBtn = document.querySelector('#saveBtn');

saveBtn.addEventListener('click', ingresarDatos);

async function ingresarDatos() {
    try {
        document.querySelector('#nombre').value = nombre;
        document.querySelector('#numeroDocumento').value = numeroDocumento;
        document.querySelector('#tipoDocumento').value = tipoDocumento;
        document.querySelector('#celular').value = celular;
        document.querySelector('#email').value = email;
        document.querySelector('#direccion').value = direccion;

        const registro = {
            nombre,
            numeroDocumento,
            tipoDocumento,
            celular,
            email,
            direccion
        }
        console.log(registro);

        const res = await postNewData(registro, token);
        alert(res);

    } catch (err) {
        console.log(err);
    }
}