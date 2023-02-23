function vendas (valorV) {
    if (valorV <= 0){
        console.log('Valor inválido, digite outro valor');
    }else if(valorV> 0 && valorV <= 10000 ){
        console.log("Bronze");
    }else if (valorV > 10000 && valorV <= 50000){
        console.log('Prata');
    }else if (valorV> 50000 && valorV< 100000){
        console.log('Sem classificação fornecida pelo exercicio');
    }else if(valorV >= 100000 && valorV <= 500000){
        console.log('Ouro');
    }else{
        console.log('Platinum')
    }
    
}

vendas(1000001);

