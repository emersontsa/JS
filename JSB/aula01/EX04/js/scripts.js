nome = prompt(`Qual o seu nome`, `Emeron`)
numero = parseInt(prompt(`Quantas vezes quer ver o seu nome`))
const cor = prompt("Qual a cor você quer ver seu nome?");

for( i = 0 ; i <  numero; i++ )
document.write(`<p style="color: ${cor}">${i + 1} ${nome}</p>`);