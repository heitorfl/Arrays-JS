
let i = 0;

const val = []

for(i = 0; i<10; i++){
    val[i] = parseInt(Math.random() * 100) 
}

let inter1 = parseInt(prompt("Digite o primeiro número do intervalo"))
let inter2 = parseInt(prompt("Digite o segundo número do intervalo"))

for(i = 0; i<10; i++){
    if(val[i]>inter1 && val[i]<inter2){
        console.log(`V[${i}] = ${val[i]}`)
    }
    
}