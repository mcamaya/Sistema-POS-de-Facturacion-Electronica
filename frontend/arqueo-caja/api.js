const urlApi = 'http://localhost:8000/api/v1/search/facturas'

export const searchRegistros = async (query) => {
    try {
        const response = await fetch(`${urlApi}/${query}`, {
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

