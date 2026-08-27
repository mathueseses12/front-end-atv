let nomeAluno = "Carlos";
let notas = [7.5, 8.0, 6.0, 9.0];
let somaNotas = 0;
let quantidadeNotas = notas.length;
let media = 0;

for (let i = 0; i < quantidadeNotas; i++) {
    somaNotas = somaNotas + notas[i];
}

media = somaNotas / quantidadeNotas;

let resultado = "";

if (media >= 7.0) {
    resultado = "Aprovado";
} else if (media >= 5.0) {
    resultado = "Em Recuperação";
} else {
    resultado = "Reprovado";
}

console.log("Aluno: " + nomeAluno);
console.log("Média: " + media.toFixed(2));
console.log("Situação: " + resultado);
