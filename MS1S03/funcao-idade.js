function idade (idade) {
    if (idade < 0 || idade > 110) {
        console.log('Idade inválida');
    }else if (idade <= 12) {
        console.log('Criança');
    }else if ( idade > 12 && idade <= 17){
        console.log('Adolescente');
    }else if ( idade > 17 && idade <= 65){
        console.log('Adulto');
    }else{
        console.log('Sênior');
    }
}

idade(66);

