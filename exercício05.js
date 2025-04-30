// crie uma função que receba um array chmado desmembraArray que execute um laço for e exiba todos os itens um abaixo do outro

// let desmembraArray = ["1,2,3,4"]

// function array(){
//     for(let i = 0; i < desmembraArray )
// }
let lista = ["Pedro", "João", "agatha", "Victor"]

function desmembraArray (lista){

    for (let i = 0; i < lista.length ; i++){
        console.log(lista[i]);
    }
}

desmembraArray(lista)
