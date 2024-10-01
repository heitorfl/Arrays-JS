
let rep = 0

let num = []

for(rep = 0; rep <= 10; rep++){

num[rep]  = parseInt(prompt("Digite números inteiros"))

}
for(rep = 0; rep <= 10; rep++){
    if(num[rep]<0){
    alert(`O vetor ${rep} é negativo`)
}
}