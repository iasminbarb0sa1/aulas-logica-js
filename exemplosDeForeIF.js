// let num = 10
// // num = num + 5
// num = + 5

// imprime múltiplos de  5 de 0 a 100, excluindo o 0

// for (let i = 0; i <= 100; i += 5) {
//     if (i > 0) {
//         console.log(i)
//     }
// }

// soma se os dois valores for maior que 10

// function somaSeMaiorQue10(a, b) {
//     if (a > 10 && b > 10) {
//         return a + b;
//     } else {
//         return "Números insuficientes"
//     }
// }

// console.log(somaSeMaiorQue10(9.9, 20))

// função para calccular média

// function verficaMedia(notas) {
//     let soma = 0;
//     for (let i = 0; i < notas.length; i++) {
//         soma += notas[i]
//     }
//     const media = soma / notas.length
//     return media >= 7? "Aprovado" : "Reprovado"
// }

// console.log(verficaMedia([10,10,10,10]))

// let vogais = ["a", "e", "i", "o", "u"]
// let verficaVogalEmArray = vogais.includes("a")

// console.log(verficaVogalEmArray)

// let palavra = "Texto" 
// let palavraConvertidaEmCaixa = palavra.toUpperCase()

// console.log(palavraConvertidaEmCaixa)

// função que conta a quantidade de vogas dentro de uma palavra

// function contarVogais(palavras) {
//     let vogais = ["a", "e", "i", "o", "u"]
//     let contador = 0
//     for(const letra of palavras.toLowerCase()){
//         if(vogais.includes(letra)){
//             contador++
//         }
//     }
//     return contador
// }

// console.log(contarVogais("Javascript"))

function verificarNumero(n) {
    if(n>=10 && n<=100 && n % 5 === 0){
        return "Número válido"
    } else{
        return "Número inválido"
    }
}

console.log(verificarNumero(75))