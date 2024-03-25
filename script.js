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

