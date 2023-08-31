// cepRequest.js
import { getCEPInfo } from './cepRequest.js';

const cepInput = document.querySelector(".cepInput");
const resultContainer = document.querySelector(".result");
const searchButton = document.querySelector("#searchButton");

searchButton.addEventListener("click", async () => {
    const cepValue = cepInput.value;

    try {
        const cepInfo = await getCEPInfo(cepValue);

        if (!cepInfo.erro) {
            const resultContent = `
                <p class="cep">CEP: ${cepInfo.cep}</p>
                <p id="localidade">Cidade: ${cepInfo.localidade}</p>
                <p id="logradouro">Logradouro/Nome: ${cepInfo.logradouro}</p>
                <p id="bairro">Bairro: ${cepInfo.bairro}</p>
                <p id="ddd">DDD: ${cepInfo.ddd}</p>
            `;
            setResult(resultContent, "#0071ad");
        } else {
            setResult(`<p class="cep">CEP: ${cepValue}</p><p>CEP não encontrado!</p>`, "red");
        }
    } catch (error) {
        setResult(`<p class="cep">CEP: ${cepValue}</p><p>O CEP informado não é válido!</p>`, "yellow");
    }
});

function setResult(content, borderColor) {
    resultContainer.innerHTML = content;
    resultContainer.style.border = `3px solid ${borderColor}`;
}
