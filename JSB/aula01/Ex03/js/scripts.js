// parseInt - converte inteiro
// parseFloat  - convert float

nome = prompt("Qual o seu nome?",'emerson').trim();
nota1 = parseFloat(prompt("Qual a nota do Primeiro bimestre?"));
nota2 = parseFloat(prompt("Qual a nota do Segundo Bimestre?"));
var notaFinal = nota1 + nota2;

if (notaFinal >= 60) {
    alert(`${nome}, você está aprovado! \n Nota final: ${notaFinal}`);
} else {
    alert(`${nome}, você está reprovado.\n Nota final: ${60 -notaFinal}`);
}