const urlApi = 'http://localhost:8000/api/v1/clientes';

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
        const data = await response.json();

        if(response.ok){
            return data;
        } if(response.status == 400){
            const errors = data.errors;
            for(let err of errors) {
                alert(err.msg);
            }
            return;
        }
        else if(response.status == 500){
            const msg = data.msg;
            alert(msg);
            return;
        } else {
            alert('Ha ocurrido un error');
        }

    } catch (err) {
        console.log(err);
    }
}