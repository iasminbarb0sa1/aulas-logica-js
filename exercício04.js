// crie um programa que verifique o faturamento mé dos 3 trimestre de 2024, sendo
//  1° trimestre => 10.650
//  2° trimestre => 20.000
//  3° trimestre => 35.000
// se for maior que 25.000, o faturamento médio é o esperado. Mas se o faturamento for menor de 25.000, o faturamento médio está abaixo do esperado

//utilize um objeto para registrae os detalhes. Utilize desestruturação para facilitar o acesso aos elementos, e fazer os cálculos. Por fim, use um condicional

const verificadorDeFaturamento = {
    primeiroTrimestre: 10650,
    segundotrimestre: 20000,
    teceiroTrimestre: 35000
}

const { primeiroTrimestre, segundotrimestre, teceiroTrimestre } = verificadorDeFaturamento

const faturamento = ((primeiroTrimestre + segundotrimestre + teceiroTrimestre) /3).toFixed(2)

console.log(faturamento)

if (faturamento >= 25000) {
    console.log( " o faturamento está dentro do esperado")
}
else {
    console.log( " o faturamento não está dentro do esperado")
}
