let conta = 0
let pessoas = 0
let porcentagem = 0
const containput=document.querySelector("#conta")
 containput.addEventListener("input",recebervalorconta)
    function recebervalorconta(evento){


        conta = number (evento.target.value)
        console.log(conta)
    }
    const pessoasinput=document.querySelector("#pessoas")
    pessoasinput.addEventListener("input",receberquantidadesdepessoas)
    function receberquantidadesdepessoas(evento){
     
        pessoasinput.addEventListener("input", receberquantidadesdepessoas)
        const paragrafoerro = document.querySelector(".pessoas #erro")
        const diverro = document.querySelector(".pessoas.input-box")
        if(evento.target.value === "0"){
            paragrafoerro.style.display ="block"
            diverro.setAttribute("id", "erro-div")

        }else{
            paragrafoerro.style.display ="block"
            
            diverro.setAttribute("id", "")
            pessoas = number(evento.target.value)

        }
    }
    calcular()
const botoesgorjeta = document.querySelectorAll(".gorjeta input [type = 'number']")
botoesgorjeta.forEach(botao =>{
    botao.addEventListener('click',receberporcentagemBotao)
   




})
function receberporcentagem (evento){
botoesgorjeta.forEach(botao => {


    botao.classList.remove("botao-ativo")


    if(botao.value === evento.target.value){
        botao.classList.add("botao-ativo")
    }
})

if(evento.target.value  !== " "){
    porcentagem = parseFloat(evento.target.value) /100
}
calcular()
}
 const gorjetainput = document.querySelector("#outra")
 gorjetainput.addEventListener("input",receberporcentagemBotao)


 function calcular (){
    if(conta !== 0 && porcentagem !== 0 && pessoas !== 0){
        
      
      
        const stronggorjetatotal = document.querySelector(".gorjeta-total > strong")
    stronggorjetatotal.innerHTML = ` R$ ${( conta * porcentagem / pessoas).toFixed(2)}`

    const strongtotal = document.querySelector(".total > strong")
    strongtotal.innerHTML =  ` R$ ${( conta * porcentagem / pessoas).toFixed(2)}`
    
    }


 }
 const botaolimpar = document.querySelector(".resultados button")
 botaolimpar.addEventListener("click" ,limpar)
  function limpar(){
    containput.value = " "
     botoesgorjeta.forEach(botao =>{
        botao.classList.remove("botao-ativo")
     })
     gorjetainput.value =" "
     pessoasinput.value = " "

     document.querySelector(".total > strong").innerHTML="R$ 0.00"
     document.querySelector(".total > strong").innerHTML = "R$0.00"
     conta = 0
     pessoas = 0
     porcentagem = 0


  }