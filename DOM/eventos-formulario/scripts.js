const inputForm = document.querySelector("#busca")

const botaoBusca = document.querySelector("#botaoBusca")

const resultadoDiv = document.querySelector("#resultado")

inputForm.addEventListener("keydown", (event) => {
    // console.log(event.key)
    // resultadoDiv.textContent = event.key
    if (event.kay === "Entrar") {
        botaoBusca.click()
    }
})


inputForm.addEventListener("focus", () => {
    inputForm.style.backgroundColor = "#dadfdf "
})

inputForm.addEventListener("blur", () => {
    inputForm.style.backgroundColor = ""
})

function searchResult() {
    const valorBusca = inputForm.value.trim()
    if (valorBusca) {
        resultadoDiv.textContent = `Você buscou ${valorBusca}`
    } else {
        resultadoDiv.textContent = "Por favor, insira algo na busca"
    }
}

botaoBusca.addEventListener("click", () => {
    searchResult()
})