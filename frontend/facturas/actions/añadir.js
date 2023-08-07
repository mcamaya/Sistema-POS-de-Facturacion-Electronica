import { searchClientes, searchProductos, postNewData } from "../api.js";
import obtenerFechaActual from "./obtenerFecha.js";
const d = document;

let productosIds = [];

const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("auth="))
    ?.split("=")[1];

addEventListener('DOMContentLoaded', () => {
    const inputFecha = d.querySelector('#fecha');
    inputFecha.value = obtenerFechaActual();
})

const modalClientes = d.querySelector('#clientesModal')
const modalSearchCliente = new bootstrap.Modal(modalClientes);
const modalProductos = d.querySelector('#productosModal')
const modalSearchProducto = new bootstrap.Modal(modalProductos);

const productTable = d.querySelector('#main-table');

/* info modal clientes */
let cltTableBody = d.querySelector('#clientesTableBody');
let cltTableHead = d.querySelector('#clientesTableHead');
let cltSearchBar = d.querySelector('#searchClientesInput');
let cltSearchBtn = d.querySelector('#searchClientesBtn');
const inputCliente = d.querySelector('#cliente');

/* info modal productos */
let prdTableBody = d.querySelector('#productosTableBody');
let prdTableHead = d.querySelector('#productosTableHead');
let prdSearchBar = d.querySelector('#searchProductosInput');
let prdSearchBtn = d.querySelector('#searchProductosBtn');

/* búsqueda clientes */
cltSearchBtn.addEventListener('click', matchedClientes);

async function matchedClientes(e){
    try {
        e.preventDefault();
        cltTableBody.innerHTML = '';
        cltTableHead.innerHTML = '';

        let input = cltSearchBar.value;
        let {result} = await searchClientes(input);
        console.log(result);
        if(result.length > 0){
            cltTableHead.innerHTML+= `
                <tr>
                    <th class="col">Nombre</th>
                    <th class="col-2">N° Documento</th>
                    <th class="col-2">Celular</th>
                </tr>
            `;
            result.forEach(clt => {
                let {_id, nombre, numeroDocumento, celular} = clt;
                cltTableBody.innerHTML+= `
                <tr class="cliente-data" name="${nombre}" uid="${_id}">
                    <td class="cliente-data">${nombre}</td>
                    <td class="cliente-data">${numeroDocumento}</td>
                    <td class="cliente-data">${celular}</td>
                </tr>
                `
            });
        } else {
            cltTableBody.innerHTML+= '<h5 class="m-4">No coincidencias encontradas</h5>'
        }

    } catch (err) {
        console.error(err);
    }
}


cltTableBody.addEventListener('click', ingresarCliente);

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

/* búsqueda productos */
prdSearchBtn.addEventListener("click", matchedProductos);

async function matchedProductos(e) {
    try {
        e.preventDefault();
        prdTableBody.innerHTML = '';
        prdTableHead.innerHTML = '';

        let input = prdSearchBar.value;
        let {result} = await searchProductos(input);
        console.log(result);
        if(result.length > 0){
            prdTableHead.innerHTML+= `
                <tr>
                    <th class="col">Nombre</th>
                    <th class="col-2">Precio</th>
                    <th class="col-2">Código</th>
                </tr>
            `;
            result.forEach(prd => {
                let {_id, nombre, precio, codigoInterno} = prd
                prdTableBody.innerHTML+= `
                <tr class="producto-data" codigo="${codigoInterno}" name="${nombre}" price="${precio}" uid="${_id}">
                    <td class="producto-data">${nombre}</td>
                    <td class="producto-data">$${precio.toLocaleString()}</td>
                    <td class="producto-data">${codigoInterno}</td>
                </tr>
                `
            });
        } else {
            prdTableBody.innerHTML+= '<h5 class="m-4">No coincidencias encontradas</h5>'
        }
    } catch (err) {
        console.error(err);
    }
}

prdTableBody.addEventListener('click', añadirProductoATabla)
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
