import responseStatus from "../helpers/responseStatus.js";
const urlApi = 'http://localhost:8000/api/v1/facturas';
const urlSearchProductos = 'http://localhost:8000/api/v1/search/productos';
const urlSearchClientes = 'http://localhost:8000/api/v1/search/clientes';

export const getAll = async () => {
    try {
        const response = await fetch(urlApi, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const getOneRegister = async (id) => {
    try {
        const response = await fetch(`${urlApi}/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}


export const postNewData = async (registro, token) => {
    try {
        const response = await fetch(urlApi, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": token
            },
            body: JSON.stringify(registro)
        });
        return responseStatus(response);

    } catch (err) {
        console.log(err);
    }
}

export const deleteData = async (id, token) => {
    try {
        const response = await fetch(`${urlApi}/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": token
            }
        });
        return responseStatus(response);
    } catch (err) {
        console.log(err);
    }
}

export const searchProductos = async (query) => {
    try {
        const response = await fetch(`${urlSearchProductos}/${query}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const searchClientes = async (query) => {
    try {
        const response = await fetch(`${urlSearchClientes}/${query}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}