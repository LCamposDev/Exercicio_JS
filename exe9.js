function rango(codigo, qtd){
    switch (codigo) {
        case 100:
            return qtd * 3
        case 200:
            return qtd * 4
        case 300:
            return qtd * 5.5
        case 400:
            return qtd * 7.5
        case 500:
            return qtd * 3.5 
        case 600:
            return qtd * 2.8
        default:
            console.log(`Produto não existi`);
        break;
    }
}

console.log(rango(100,2))
console.log(rango(200,2))
console.log(rango(300,2))
console.log(rango(400,2))
console.log(rango(500,2))
console.log(rango(600,2))
console.log(rango(720,2))