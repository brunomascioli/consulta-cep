const BASE_URL = 'https://viacep.com.br/ws/';

export async function getCEPInfo(cep) {
    return fetch(`${BASE_URL}/${cep}/json/`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao obter informações do CEP: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error("Erro ao obter informações do CEP:", error);
            return null;
        });
}

