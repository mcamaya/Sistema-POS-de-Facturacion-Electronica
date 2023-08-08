import { searchClientes, searchProductos } from "../api.js";
import { cltTableHead, cltTableBody, cltSearchBar, prdTableHead, prdTableBody, prdSearchBar } from "./añadir.js";

export async function matchedClientes(e){
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

export async function matchedProductos(e) {
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