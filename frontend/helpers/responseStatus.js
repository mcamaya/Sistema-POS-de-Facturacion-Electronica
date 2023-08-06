
const responseStatus = async (response) => {
    try {
        const data = await response.json();
        if(response.ok){
            return data;
        } else if(response.status == 400){ //Si el error ha ocurrido en los middlewares
            const errors = data.errors;
            for(let err of errors) {
                alert(err.msg);
            }
            return;
        }
        else if(response.status == 401 || response.status == 500){ //Si el error ha ocurrido en los controladores o verificación de token
            const msg = data.msg;
            alert(msg);
            return;
        } else {
            alert('Ha ocurrido un error');
        }
    } catch (err) {
        console.log('Error en el helper' + err);   
    }
}

export default responseStatus;