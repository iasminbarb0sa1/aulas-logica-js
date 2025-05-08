let contador = 0;

const resultado = document.getElementById("resultado");
const btnIncrementar = document.getElementById("btnIncrementar");
const btnDiminuir = document.getElementById("btnDiminuir");

btnIncrementar.addEventListener("click", () => {
    contador++;
    resultado.textContent = ` Contador:  ${contador}`
});

btnDiminuir.addEventListener("click", () => {
    if(contador > 0){
    contador--;
    resultado.textContent = ` Contador:  ${contador}` 
    }
});