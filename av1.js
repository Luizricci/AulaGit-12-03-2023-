let tabuada = 34;
let limite = 30;
// esse if serve para verificar se o numero é menor ou igual a 0
if (tabuada <= 0) {
    console.log("erro ")
    // no else if estamos verificando se o numero tem casas decimais 
} else if (tabuada % 1 !== 0 || limite % 1 !== 0) {
    console.log("erro ")
} else {
    // neste for estamos fazendo o looping para o limite ser igual ao pedido 
    for (let i = 1; i <= limite; i++) {
        console.log(i)
         // neste console log fizemos a multiplicação e a exibição da tabuada
        console.log(tabuada + i + tabuada * i);
    }
}

console.log("commit 11")
console.log("commit 12")
console.log("commit 13")
console.log("commit 14")
console.log("commit 15")
console.log("commit 16")