const notasMatematica = {
    primeiroTrimestre: 10,
    segundotrimestre: 9.5,
    teceiroTrimestre: 10
}

const { primeiroTrimestre, segundotrimestre, teceiroTrimestre } = notasMatematica

const mediaDeMatematica = ((primeiroTrimestre + segundotrimestre + teceiroTrimestre) / 3).toFixed(2)
 
    if (mediaDeMatematica >= 7) {
        console.log("Aprovado")
    }
    else {
        console.log("reprovado")
    }


 