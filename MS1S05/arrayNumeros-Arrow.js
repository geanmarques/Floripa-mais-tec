var arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayNumeros);
var arrayInvertido = [];
console.log(arrayInvertido);

const inverter = (arrayNumeros, arrayInvertido) => {
    arrayNumeros.reverse();
    arrayInvertido.push(arrayNumeros);
    console.log(arrayInvertido);
}

inverter(arrayNumeros, arrayInvertido);