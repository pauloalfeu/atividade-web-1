
// Obter os elementos da página

const frm = document.querySelector("form");
const resp = document.querySelector("pre");


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    // obter o numero informado
    const n = Number(frm.number.value);
    

    //criar variavel para receber
        let resposta = ""

        

        // criar um laço de repetição

        for(let i=0; i<=n;i++){
          if(i % 2 !=0 ){
            resposta+= (i) + "\n";
          }
        }


    // alterar o conteudo da tag pre
    resp.innerText = resposta;

 })