/* 	Escreva um programa para verificar a validade de uma data.
 
	O programa pergunta o dia, mês e ano de uma data (separadamente em três variáveis inteiras) e 
	imprime uma mensagem indicando se a data é válida ou não (devem ser considerados os anos bissextos). 
*/

var dia = parseInt(prompt("Digite o dia"));
var mes = parseInt(prompt("Digite o mês"));
var ano = parseInt(prompt("Digite o ano "));

if(mes > 12){
    console.log("Essa data é inválida.");
} else if(dia > 32){
    console.log("Essa data é inválida.");
} else if(dia > 30 && mes == 2 || mes == 4 || mes == 6 || mes == 9 || mes == 11){
    console.log("Essa data é inválida.");
} else if(mes == 2 && dia > 29){
    console.log("Essa data é inválida.");
} else if (mes == 0 || dia == 0 || ano == 0){
    console.log("Essa data é inválida");
} else {
    console.log("Essa data é válida.");
}