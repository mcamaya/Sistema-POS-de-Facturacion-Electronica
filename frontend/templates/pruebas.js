
const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("auth="))
    ?.split("=")[1];


console.log(token);

const urlApi = 'http://localhost:8000/api/v1/usuarios'

const post = document.querySelector('#post');
post.addEventListener('click', postReq);

const data = {
    "nombre": "Pedro Solano",
    "email": "funcionaaaaaaaa@example.com",
    "password": "123456"
}


async function postReq(e) {
    e.preventDefault();
    const res = await fetch(urlApi, {
        method: 'POST',
        headers: {
            "Content-Type":"application/json",
            "x-auth-token": token
        },
        body: JSON.stringify(data)
    });
    const response = await res.json();
    console.log(response);
}