// const fs = require("fs")
let cpf =  document.getElementById("CPF").value
let celular =  document.getElementById("celular").value
let senha =  document.getElementById("senha").value
let confirmacao = document.getElementById("confirmacaosenha").value
let dia =  document.getElementById( "dia").value
let fonte =  document.getElementById("fonte").value
let concordar =  document.getElementById("concordar").value

let data = {
    cpf,
    celular,
    senha,
    confirmacao,
    dia,
    fonte,
    concordar

}
console.log("Salvo com sucesso")
setTimeout(console.log(`Seus dados são: ${data}`),2000)

/*
fs.writeFile(cpf+".txt", data, function (error){
    if (error) throw error
    console.log("Salvo com sucesso")

})

 */

