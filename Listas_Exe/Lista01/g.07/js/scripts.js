
alert("Digite três valores coresnpondetes ao RGB a Seguir:");

rCor = parseInt(prompt("R Vores de [0 a 255]"));
gCor = parseInt(prompt("G Vores de [0 a 255]"));
bCor = parseInt(prompt("B Vores de [0 a 255]"));

document.write(`<h1 style="color: rgb(${rCor},${gCor}, ${bCor});">Fundamentos de Web Design II</h1>`)