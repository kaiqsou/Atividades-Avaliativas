var Salario = parseInt(prompt("Digite o seu salário"));
var porcentagem = 0;
var ValorAumento = 0;
var SalarioFinal = 0;


if(Salario <= 1200){
    porcentagem = "20%";
    ValorAumento = Salario * 0.2;
    SalarioFinal = ValorAumento + Salario;
} else if (Salario >= 1201 && Salario <= 2400) {
    porcentagem = "15%";
    ValorAumento = Salario * 0.15;
    SalarioFinal = ValorAumento + Salario;
} else if (Salario >= 2401 && Salario <= 4000) {
    porcentagem = "10%";
    ValorAumento = Salario * 0.1;
    SalarioFinal = ValorAumento + Salario;
} else {
    porcentagem = "5%";
    ValorAumento = Salario * 0.05;
    SalarioFinal = ValorAumento + Salario;
}

console.log("O seu salário era: " + Salario + "." + " Ele aumentou em: " + porcentagem + ", que equivale a R$" + ValorAumento + "." + " O seu novo salário é de: " + SalarioFinal);

*/