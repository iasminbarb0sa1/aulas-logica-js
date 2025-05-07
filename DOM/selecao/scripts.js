// seleção por ID

const content = document.getElementById("content")

content.innerHTML = `<P>Parágrafo de texto</p>`//adiciona elemento de html dinamicamente

content.style.backgroundColor = "#F00"
content.style.fontSize = "30px"

// seleção por classe

const classeText = document.getElementsByClassName("text")

console.log("classeText", classeText)


for (text of classeText) {
    text.style.color = "#F00"
}

//seleção por tag

const titles = document.getElementsByTagName("h2")

console.log("titles", titles)

for (title of titles) {
    title.style.fontSize = "40px"
}

// seleção por query selector

const elementFeature = document.querySelector("#feature")

const newElement = document.createElement("p")

newElement.textContent = "Um nova elemento"

elementFeature.append(newElement)

elementFeature.insertAdjacentHTML("beforeend", 
     ` <div>
     <p> Outro elemento de parágrafo</p>
     </div>`
)

document.body.insertBefore(newElement, elementFeature)

// seleção por query selectorAll

const links = document.querySelectorAll("#links a")

console.log("links", links)

for(link of links){
    link.classList.add("feature-links")
    link.target = "_blank"
}