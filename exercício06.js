//crie um array de objetos em cada objeto é um produto, tendo como chave (nome,preco, descricao). crie pelo menos 3 produtos.

//crie uma variavel que irá armanezar o array com os nomes dos produtos

// crie uma segunda variável que irá armazenar o array com os preços dos produtos

// use o laço for ou for of para exibir cada item do array da variável de nomes no console

const produtos = [
    {
        nome: "copo",
        preco: 20,
        descricao: "copo de vidro"
    },
    {
        nome: "garrafa",
        preco: 15,
        descricao: "garrafa de plastico"
    },
    {
        nome: "boneca",
        preco: 35,
        descricao: "boneca de pano"
    }
]

const nomeProduto = produtos.map(produto => produto.nome)

const precoProduto = produtos.map(produto => produto.preco)

const descricaoProduto = produtos.map(produto => produto.descricao)

console.log("o preço é:", precoProduto, "Descrição do produto:", descricaoProduto)


for (let i = 0; i < nomeProduto.length; i++) {
    console.log(`${nomeProduto[i]} : R$ ${precoProduto[i].toFixed(2)} ${descricaoProduto}  `);
}



