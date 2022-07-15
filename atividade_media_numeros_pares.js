var NumeroIntervalo = parseInt(prompt("Digite um número"));
var QtdePares = 0;
var SomaPares = 0;

for(i = 0; i <= NumeroIntervalo; i++){
    if (i % 2 == 0){
        QtdePares++
        SomaPares+=i
    }
} 

var MediaPares = SomaPares / QtdePares;

console.log("A quantidade de pares entre 0 e " + NumeroIntervalo + " é: " + QtdePares + "." + " A soma dos números pares é: " + SomaPares + "." + " E a média dos números pares é de: " + MediaPares);
