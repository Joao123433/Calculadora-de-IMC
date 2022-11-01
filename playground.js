function dadosUsuario() {
    // pegando os dados do usuario (peso e altura)
    let peso = Number(document.querySelector("#peso").value)
    let altura = Number(document.querySelector("#altura").value)

    // chamando a funcao e passando o peso e a altura como argumento
    calculoDoImc(peso, altura)
}


function calculoDoImc(peso, altura) {
    // pegando o "p" elemento responsavel por mostrar o resultado
    let resultado = document.querySelector("#resultado")

    // variavel que armazena a operacao para calcular o IMC
    let imc = peso / (altura * 2)

    // condicional que verifica o imc e da a classificacao
    if(imc < 18.5) {
        resultado.innerHTML = `IMC: ${imc.toFixed(2)}, esta abaixo do peso`
    } else if(imc < 24.9) {
        resultado.innerHTML = `IMC: ${imc.toFixed(2)}, peso normal`
    } else if(imc < 29.9) {
        resultado.innerHTML = `IMC: ${imc.toFixed(2)}, acima do peso (sobrepeso)`
    } else if(imc < 34.9) {
        resultado.innerHTML = `IMC: ${imc.toFixed(2)}, obesidade I`
    } else if(imc < 39.9) {
        resultado.innerHTML = `IMC: ${imc.toFixed(2)}, obesidade II`
    }else {
        resultado.innerHTML = `IMC: ${imc.toFixed(2)}, obesidade III`
    }
}


document.querySelector("#calcular").addEventListener("click", function(e) {
    e.preventDefault()
    dadosUsuario()
})