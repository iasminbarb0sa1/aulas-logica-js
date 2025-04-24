
const produto01 = {
    nome: "garrafa",
    preco: 20.00,
    quantidade: 3
}

const produto02 = {
    nome: "abridor",
    preco: 5.00,
    quantidade: 2
}

const TotalDoProduto01 = produto01.preco * produto01.quantidade
const TotalDoProduto02 = produto02.preco * produto02.quantidade

console.log(`O resultado do calculo final é ${TotalDoProduto01 + TotalDoProduto02}`)