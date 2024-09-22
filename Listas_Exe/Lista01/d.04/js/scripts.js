nota1 = parseInt(prompt("Digite nota do 1º Bimestes:"));
nota2 = parseInt(prompt("Digite nota do 2º Bimestes:"));
soma = nota1+nota2;
if (soma >= 60)
    alert("Aprovado");
else
    alert(`Reprovado: ${60-soma}`);
