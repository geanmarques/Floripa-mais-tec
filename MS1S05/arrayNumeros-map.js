var arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arrayQuadrados = (parametro1) => {
    var conta = parametro1.map(parametro1 => parametro1 ** 2);
    console.log(conta);
}

arrayQuadrados(arrayNumeros);