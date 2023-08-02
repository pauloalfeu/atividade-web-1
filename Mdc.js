
// Obter os elementos da página

const frm = document.querySelector("form");
const resp = document.querySelector("pre");


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    // obter os numeros informados
    const numero1 = Number(frm.value1.value);
    const numero2 = Number(frm.value2.value);

    //criar variavel para receber
    
    let mdc = 1;
    let menor = 1;

    //encontrando o menor valor inserido
    if (numero1 > numero2) {
        menor = numero2;
    } else {
        menor = numero1;
    }

    // criar um laço de repetição para encontrar o mdc
    for (let i = 1; i <= menor; i++) {
        if (numero1 % i == 0 && numero2 % i == 0){
            mdc = i;
          }
          
    }

    // alterar o conteudo da tag pre

    resp.innerText = "o MDC (maior divisor comum) entre os números inseridos é: " + mdc;

    
})