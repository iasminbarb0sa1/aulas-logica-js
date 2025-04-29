// function saudacao (){
//     console.log("Bom dia!")
// }
// arrow function com parâmetros
//  const saudacao = (turno,nome ="João")=>{
//     console.log(`${turno} ${nome}`)
//  }
// saudacao("Bom dia" ,"Iasmin")
// saudacao("boa noite")
// const soma = (x,y)=>{
//     return x+y
// }

// const soma = (x, y) => x + y

// const resultadoDaSoma = soma(5, 8, 9)

// console.log(resultadoDaSoma)

// const mutiplicacao = (x, y) => x * y

// const resultadoDaMutiplicacao = soma(2, 6, 5)

// console.log(resultadoDaMutiplicacao)

// const resto = (x, y, z) => x % y % z

// const resultadoDoResto = soma(10, 5, 9)

// console.log(resultadoDoResto)

// const subtracao = (x, y ) => x - y

// const resultadoDaSubtracao = soma(7, 8)

// console.log(resultadoDaSubtracao)

// const exponeciacao = (x, y, z) => x ** y ** z

// const resultadoDaExponeciacao = soma(15, 7, 5)

// console.log(resultadoDaExponeciacao)

// const divisao = (x, y) => x / y 

// const resultadoDaDivisao = soma(10, 8)

// console.log(resultadoDaDivisao)

// const calculo = (x,y,z,a) =>{
//     return soma(x,y) + mutiplicacao(z,a)
// }

// const resultadoDoCalculo = calculo(10,2,5,7)
// console.log("resultado do cálculo", resultadoDoCalculo)

// retomar o valor de várias funções em um returs dentro de um objeto

// const calculo = (x,y)=>{
//     return{
//         soma: soma(x,y),
//         subtracao: subtracao (x,y),
//         mutiplicacao: mutiplicacao (x,y),
//         divisao: divisao(x,y),
//     }
// }

// const resultadoFinalDoCalculo = calculo (20,10)
// console.log("resulyado final" , resultadoFinalDoCalculo)

// escopo global e local (de bloco ou função)

const escopoGlobal = "Escopo Global"

function chamaEscopo(){
    console.log(escopoGlobal)
}


 function chamaEscopo(){
    const escopoLocal = "Escopo Local"
    console.log(escopoGlobal)
}
 console.log(escopoGlobal)

