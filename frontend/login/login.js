const urlApi = 'http://localhost:8000/api/v1/auth';

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const ingresarBtn = document.querySelector('#ingresarBtn');

ingresarBtn.addEventListener('click', login);

async function login(e){
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    const dataUser = {email, password}
    const res = await fetch(urlApi, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataUser)
    });


    if(res.ok){
        const {token} = await res.json();
        document.cookie = `auth=${encodeURIComponent(token)}; path=/;`;
        document.location='../inventario/inventario.html';
    } else if(res.status == 400){
        const {errors} = await res.json();
        for(let err of errors) {
            alert(err.msg);
        }
        return;
    } else if(res.status == 401){
        const {msg} = await res.json();
        alert(msg);
        return;
    } else {
        alert('Ha ocurrido un error');
    }
}

