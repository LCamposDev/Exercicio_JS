function Lados(nm1, nm2, nm3) {

    if (nm1 == nm2 && nm2 == nm3) {
        return 'Equilatero'
    }
    else if (nm1 == nm2 || nm2 == nm3 || nm1 == nm3) {
        return 'Isósceles'
    }
    else if (nm1 !== nm2 && nm2 !== nm3){
        return 'Escaleno'
    }
}
console.log(Lados(1,1,1));
console.log(Lados(1,2,2));
console.log(Lados(1,4,6));