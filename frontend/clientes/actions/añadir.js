import { postNewData } from "../api.js";

const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("auth="))
    ?.split("=")[1];

const saveBtn = document.querySelector('#saveBtn');

saveBtn.addEventListener('click', ingresarDatos);

async function ingresarDatos() {
    try {
        let nombre = document.querySelector('#nombre').value;
        let numeroDocumento = document.querySelector('#numeroDocumento').value;
        let tipoDocumento = document.querySelector('#tipoDocumento').value;
        let celular = document.querySelector('#celular').value;
        let email = document.querySelector('#email').value;
        let direccion = document.querySelector('#direccion').value;

        let inputs =  [nombre,numeroDocumento,tipoDocumento,celular,email,direccion]
        const registro = {
            nombre,
            numeroDocumento
        }

        if(tipoDocumento) registro.tipoDocumento = tipoDocumento;
        if(celular) registro.celular = celular;
        if(email) registro.email = email;
        if(direccion) registro.direccion = direccion;

        console.log(inputs, registro);

        await postNewData(registro, token);

    } catch (err) {
        console.log(err);
    }
}