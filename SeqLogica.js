
// Obter os elementos da página

const frm = document.querySelector("form");
const resp = document.querySelector("pre");


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    // obter o numero informado
    const n = Number(frm.number.value);
    

    //criar variavel para receber
        let resposta = ""
        let q = Number();
        let c = Number();
        

        // criar um laço de repetição para fazer a sequencia lógica
        for (let i=1; i <=n; i++){
            q = i*i;
            c = i*i*i;
            resposta += (i) + " " + q + " " + c + " " + "\n" + i + " " + (q+=1) + " " + (c+=1) + "\n";
            
          }

    // alterar o conteudo da tag pre
    resp.innerText = resposta;

 })