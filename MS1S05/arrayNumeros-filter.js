var arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arrayImpares = arrayNumeros.filter(arrayNumeros => {
    if (arrayNumeros % 2 == 0) {
        console.log(false);
    }else{
        console.log(true);
    }
})

console.log(arrayImpares);