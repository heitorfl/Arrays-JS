const a = []
const b = []
const c = []
let i = 0;

for(i=0;i<5;i++){
    a[i] = parseInt(prompt("Digite um número"))

}

for(i=0;i<5;i++){
    b[i] = parseInt(Math.random () * 5)
}

for(i=0;i<5;i++){
    c[i] = a[i] * b[i]
    console.log(`c = ${c[i]}`)
}