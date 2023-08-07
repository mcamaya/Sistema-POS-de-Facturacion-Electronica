import { getOneRegister, updateData } from "../api.js";

const token = document.cookie
  .split("; ")
  .find((row) => row.startsWith("auth="))
  ?.split("=")[1];

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

const idRegistro = getParameterByName("id");
console.log(idRegistro);

const dataRegistro = await getOneRegister(idRegistro);
console.log(dataRegistro);

let { producto, stockDisponible, stockMinimo } = dataRegistro;
let { nombre, precio } = producto;
console.log(token);

document.querySelector("#nombre").value = nombre;
document.querySelector("#precio").value = precio;
document.querySelector("#stockDisponible").value = stockDisponible;
document.querySelector("#stockMinimo").value = stockMinimo;

const saveBtn = document.querySelector("#saveBtn");

saveBtn.addEventListener("click", updateItem);

async function updateItem(e) {
  try {
    e.preventDefault();
    let stockDisponible = document.querySelector("#stockDisponible").value;
    let stockMinimo = document.querySelector("#stockMinimo").value;

    let registro = { stockDisponible, stockMinimo };
    let updated = await updateData(idRegistro, registro, token);
    console.log(updated);
    document.location = "../inventario.html";
  } catch (err) {
    console.log(err);
  }
}
