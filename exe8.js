function AP(STP){ //AP = avaliaPontuações  STP = stPontuações
    let P = STP.split(" ") //P = Pontuações split: separador Ex: , ou qualquer coisa que estiver separando pode até mesmo usar espaço
    let QTBR = 0 //QTBR = Quebra de Recordes
    let PJ = 1 //PJ = Pior Jogo(contado como partidas)
    let MP = P[0] // MP = Maior Pontuação
    let MEP = P[0] // MEP = Menor Pontuação

    for(let i = 1;  i < P.length; i++){ //length: converte a string em numero
        let p = parseInt(P[i]) //p = pontuação parseInt: analisa um argumento string e retorna um inteiro na base especificada.
        if(p > MP){
            MP = p
            QTBR++
        }else if (p < MEP){
            MEP = p
            PJ = i+1
        }
    }
    return [QTBR, PJ]           
}

console.log(AP("10 20 20 8 25 3 0 30 1"))
console.log(AP("0 20 4 8 9 22 12 43 22"))