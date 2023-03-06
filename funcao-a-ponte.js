function ponte(peso, comprimento) {
    if (peso > 1500 & comprimento > 5) {
        console.log("Você não pode passar pela ponte, seu carro está acima do peso e do comprimento permitidos.");
    }else if (peso <= 1500 & comprimento > 5) {
        console.log("Você não pode passar pela ponte, seu carro está dentro do peso, mas ultrapassa o comprimento permitido.");
    }else if (peso < 1500 & comprimento <= 5) {
        console.log("Você não pode passar pela ponte, seu carro está dentro do comprimento permitido, mas ultrapassou o peso permitido.");
    }else {
        console.log("Você pode passar pela ponte, seu carro está dentro do comprimento e peso permitido.");
    }
    
}
ponte(1500, 5);