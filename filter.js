const numeros = [1, 2, 3, 4, 5]

const pares = numeros.filter(num => num % 2 === 0)

// console.log("números pares", pares)

const produtos = [
    {
        nome: "Notebook",
        preco: 3000
    },
    {
        nome: "Mouse",
        preco: 50
    },
    {
        nome: "Monitor",
        preco: 1200
    },
    {
        nome: "teclado",
        preco: 120
    }
]

// const produtosMaioresQueMil = produtos.filter(produto => produto.preco < 120)

// console.log(produtosMaioresQueMil)

const mouses = [
    { nome: "Mouses"      
    },
    { nome: "Mouse"      
    },
    { nome: "Monitor"       
    },
    { nome: "teclado" }
]

const somenteMouse = mouses.filter(item =>
    item.nome === "Mouse" || item.nome === "Mouses"
)

console.log(somenteMouse)
