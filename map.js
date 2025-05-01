const numeros = [1,2,3,4,5]
const valoresDobrados = numeros.map(num => num * 2)

// console.log(valoresDobrados)
// console.log(numeros)

const usuarios = [
    {
        nome: "João",
        idade: 52
    },
    {
        nome:"Maria",
        idade: 40
    },
    {
       nome: "Joana",
       idade: 30
    }
]


const nomeUsuario = usuarios.map(usuario => usuario.nomeUsuario)

console.log("nomes de usuarios", nomeUsuario)