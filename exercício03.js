// crie uma funçao que recebe um parâmetro de média e verificar em um condicional se a nota for maior que 7, o aluno está aprovado, se não, o aluno está reprovado


function media (nota = 8){
  
if (nota >=7 ) {
    console.log("Aprovado")
}
else if (nota >=6){
  console.log("Recuperação")
}
else {
    console.log("reprovado")
}
}
media()
