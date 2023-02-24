// Transforma um número decimal em inteiro e diz se ele é par ou impar

function parImpar(num) {
    let numero = parseInt(num)
    if (numero % 2 == 0) {
        console.log('O número '+ numero + ' é par');
    }else{
        console.log('O número '+ numero + ' é impar');
    }
}
parImpar(2003.99995);