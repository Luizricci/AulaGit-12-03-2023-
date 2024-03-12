let tabuada = 34;
let limite = 15;

if (tabuada <= 0) {
    console.log("nao podemos fazer a mutiplicação por numeros menores ou iguais a 0 ")
} else if (tabuada % 1 !== 0 || limite % 1 !== 0) {
    console.log("não multiplicamos numero com virgula")
} else {
    for (let i = 1; i <= limite; i++) {
        console.log(tabuada + "x" + i + "=" + tabuada * i);
    }
}

console.log('teste');
