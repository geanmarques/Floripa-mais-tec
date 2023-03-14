const minhaLista = ["Banana", "Morango", "Maça", "Uva", "Pêra"];
const minhaListaJSON = [];
minhaLista.forEach( item => {
    minhaListaJSON.push(JSON.stringify(item));
});

localStorage.setItem('minhaLista', JSON.stringify(minhaListaJSON));