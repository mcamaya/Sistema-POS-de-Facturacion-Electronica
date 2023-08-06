import responseStatus from "../helpers/responseStatus.js";
const urlApi = 'http://localhost:8000/api/v1/inventario';

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
            method: 'GET',
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

export const updateData = async (id, registro, token) => {
    try {
        const response = await fetch(`${urlApi}/${id}`, {
            method: 'PATCH',
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