/* 
INDIQUE A SAÍDA DOS TRECHOS DE PROGRAMA DO PEDAÇO DO FLUXOGRAMA A SEGUIR. CONSIDERANDO OS SEGUINTES VALORES:
const A = 2;
const B = 3;
const C = 5;
const D = 9;
let X;
  
//Verdadeiro 
if (D > 5) {
    X = (A + B) * D
} else {
    X = (A - B) / C
}
console.log(X)

// Falso 
if(!(D > 5)){
    X = (A + B) * D;
} else {
    X = (A - B) / C;
}
console.log("X é igual a :", X);
*/

/* 
Estrutura Condicional SIMPLES
Estrutura Condicional COMPOSTA
Estrutura Condicional ANINHADA
*/

/*
Declare um valor numérico:
Vamos analisar se esse número é ou não maior que 10
a. Se for, vamos escrever na tela a seguinte frase: "Esse número é maior que 10."
b Se não for, vamos escrever na tela a seguinte frase: "Esse número é menor que 10."
*/
/*
let M = 21
if (M > 10) {
    console.log("Esse número é maior que 10.");
} else { (M < 10)
    console.log("Esse número é menor que 10.");
}
console.log(M)
*/

let N = 50
let M = 51
const soma = (N + M)
if (soma > 100) {
    console.log("Esse número é maior que 100.");
} else if (soma === 100) {
        console.log("Bingo! Deu 100.");
} else { (soma < 100)
    console.log("Esse número é menor que 100.");
}
console.log(soma)