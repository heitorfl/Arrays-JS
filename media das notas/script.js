
let nome = [];

let nota = [];

let medianotas = 0.0

let x = 0

for(x = 0; x<5;x++){
    nome [x] = prompt("Digite o nome do aluno")
    nota [x] = parseFloat(prompt("Digite a nota do aluno"))

    medianotas = medianotas+nota[x];
}

    medianotas = medianotas/5

for(x = 0; x < 5; x++){
    if(nota[x]<medianotas){
        alert(`${nome[x]} está abaixo da média, com ${nota[x]}`)
    } 
}