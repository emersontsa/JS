// alert
// confirm
// .trim() metodo para tirar espaço
nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade")

if (idade > 18)
    alert('${nome},você já pode dirigir')
else
    alert(`${nome},você não ${idade} tem idade suficiente`)