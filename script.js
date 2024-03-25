let conta = 0
let pessoas = 0

const containput=document.querySelector("#conta")


 containput.addEventListener("input",recebervalorconta)


    function recebervalorconta(evento){
        conta = number (evento.target.value)



        console.log(conta)
    }

    const pessoasinput=document.querySelector("#pessoas")
    pessoasinput.addEventListener("input",receberquantidadesdepessoas)


    function receberquantidadesdepessoas(evento){
        if(evento.target.value === "0"){
            
            
            const paragrafoerro = document.querySelector(".pessoas #erro")
            paragrafoerro.computedStyleMap.display ="block"

        }

        


    }

