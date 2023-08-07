function doesItHaveTwoDigits(num) {
    if(num.toString().length < 2)return '0' + num;
    return num;
}

const obtenerFechaActual = () => {
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();
    return `${año}-${doesItHaveTwoDigits(mes)}-${doesItHaveTwoDigits(dia)}`;
}

export default obtenerFechaActual;