// Cálculo do IMC

var peso = parseFloat(prompt("Peso: "))
var altura = parseFloat(prompt("Altura: "))

imc = peso /(altura * altura)

document.write("O IMC é de " + imc)