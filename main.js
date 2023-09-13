const resultados = document.querySelector('.resultado')
const numeros = document.querySelector('.buttonGrayNumber')


const insert = (num) => {
    let results = resultados.innerHTML 
    resultados.innerHTML = results + num

}

const limpar = () => {
    resultados.innerHTML = ""
}

const calcular = (clin) => {
    let resultado = resultados.innerHTML
    if(resultado){
        resultados.innerHTML = eval(resultado)
    }
    else {
        resultados.innerHTML = 0
    }
    
}




