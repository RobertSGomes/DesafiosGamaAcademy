function desafio3() {
    const num = prompt("Digite um número")

    if (isNaN(num)) {
        console.log("Não é um número")
        desafio3()
    } else {
        num % 2 === 0 ? console.log("É par") : console.log("É impar")
    }
}

function desafio4() {
    const param = prompt("Digite um parâmetro")

    for (let i = param; i > 0; i--) {
        var asteristicos = ""

        for (let j = 0; j < i; j++) {
            asteristicos += "*"
        }

        console.log(asteristicos + "\n")
    }
}

desafio4()