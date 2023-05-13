const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1) //maior valaor + 1 para incluir o último número
}

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor