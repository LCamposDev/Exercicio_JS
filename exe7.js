function bask(a, b, c){
    let resultados = []
    let del = (b ** 2) - (4 * a * c)
    
    if(del<0){
        return "delta é negativo"
    }
    let x1 = (-b + Math.sqrt(del)) / 2 * a    
    let x2 = (-b - Math.sqrt(del)) / 2 * a 

    resultados.push(x1)
    resultados.push(x2)

    return resultados
}

console.log(bask(3, - 5, 12))
console.log(bask(1, - 10, 24))