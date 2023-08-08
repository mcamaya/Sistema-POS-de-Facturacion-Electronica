import { searchClientes, searchProductos, postNewData } from "../api.js";
import { matchedClientes, matchedProductos } from "./search.js";
import obtenerFechaActual from "../../helpers/obtenerFecha.js";
import token from "../../helpers/getTokenFromCookie.js";
const d = document;

let productosIds = [];


addEventListener('DOMContentLoaded', () => {
    const inputFecha = d.querySelector('#fecha');
    inputFecha.value = obtenerFechaActual();
})

/* bootstrap modal methods */
const modalClientes = d.querySelector('#clientesModal')
const modalSearchCliente = new bootstrap.Modal(modalClientes);
const modalProductos = d.querySelector('#productosModal')
const modalSearchProducto = new bootstrap.Modal(modalProductos);

const productTable = d.querySelector('#main-table');
const inputCliente = d.querySelector('#cliente');

/* info modal clientes */
export let cltTableBody = d.querySelector('#clientesTableBody');
export let cltTableHead = d.querySelector('#clientesTableHead');
export let cltSearchBar = d.querySelector('#searchClientesInput');
let cltSearchBtn = d.querySelector('#searchClientesBtn');

/* info modal productos */
export let prdTableBody = d.querySelector('#productosTableBody');
export let prdTableHead = d.querySelector('#productosTableHead');
export let prdSearchBar = d.querySelector('#searchProductosInput');
let prdSearchBtn = d.querySelector('#searchProductosBtn');

/* búsqueda clientes */
cltSearchBtn.addEventListener('click', matchedClientes);
cltTableBody.addEventListener('click', ingresarCliente);

/* búsqueda productos */
prdSearchBtn.addEventListener("click", matchedProductos);
prdTableBody.addEventListener('click', añadirProductoATabla)

function ingresarCliente(e) {
    try {
        e.preventDefault();
        if(e.target.classList.contains('cliente-data')){
            let cliente = e.target.parentElement;
            let uid = cliente.getAttribute('uid');
            let nombre = cliente.getAttribute('name');
            inputCliente.value = nombre;
            inputCliente.setAttribute('clienteId', uid);
        }
        
        modalSearchCliente.hide();
    } catch (err) {
        console.error(err);
    }
}


function añadirProductoATabla(e) {
    try {
        e.preventDefault();
        if(e.target.classList.contains('producto-data')){
            let producto = e.target.parentElement;
            
            let _id = producto.getAttribute('uid');
            let nombre = producto.getAttribute('name');
            let precio = parseInt(producto.getAttribute('price'));
            let codigoInterno = producto.getAttribute('codigo');
        
            let newProduct = {
                cantidad: 1,
                _id,
                nombre,
                precio
            }

            productTable.innerHTML += `
                <tr>
                    <td class="bording"><p class="body_text">${codigoInterno}</p></td>
                    <td class="bording"><p class="body_text">${nombre}</p></td>
                    <td class="bording"><p class="body_text">$${precio.toLocaleString()}</p></td>
                    <td class="bording d-flex justify-content-center align-items-center p-2">
                        <i class="bi bi-dash-circle-fill signoMenos" cantidad="${_id}"></i>
                        <input style="width: 35px;" type="number" value="1"  disabled class="body_text my-2" id="cantidad-${_id}">
                        <i class="bi bi-plus-circle-fill signoMas" cantidad="${_id}"></i>
                    </td>
                </tr>
            `

            productosIds = [...productosIds, newProduct];
            console.log(productosIds);
        }
        
        modalSearchProducto.hide();
    } catch (err) {
        console.error(err);
    }
}

productTable.addEventListener('click', (e) => {
    if(e.target.classList.contains('signoMas')){
        let productoId = e.target.getAttribute('cantidad');
        const muchosProductos = productosIds.map(prd => {
            if(prd._id === productoId){
                prd.cantidad++;
                const cantidadInput = document.querySelector(`#cantidad-${productoId}`);
                cantidadInput.value++;
                return prd;
            }else{
                return prd;
            }
        });
        console.log(muchosProductos);
    }
});

productTable.addEventListener('click', (e) => {
    if(e.target.classList.contains('signoMenos')){
        let productoId = e.target.getAttribute('cantidad');
        const muchosProductos = productosIds.map(prd => {
            if(prd._id === productoId){
                prd.cantidad--;
                const cantidadInput = document.querySelector(`#cantidad-${productoId}`);
                cantidadInput.value--;
                return prd;
            }else{
                return prd;
            }
        });
        console.log(muchosProductos);
    }
});

const enviarBtn = d.querySelector('#enviarBtn');
enviarBtn.addEventListener('click', enviarRegistroFactura);

async function enviarRegistroFactura(){
    try {
        let numeroFactura = parseInt(d.querySelector('#numeroFactura').value);
        let fecha = d.querySelector('#fecha').value;
        let descuento = parseInt(d.querySelector('#descuento').value);
        let clienteId = d.querySelector('#cliente').getAttribute('clienteid');
        
        const data = {
            numeroFactura,
            fecha,
            descuento,
            clienteId,
            productosIds
        }
        console.log(data);
        await postNewData(data, token);
        document.location.reload();
    } catch (err) {
        console.error(err);
    }
}
