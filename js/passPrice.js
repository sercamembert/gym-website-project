function price(){
    const index = document.getElementById('select').selectedIndex;
    let price = document.querySelector('.pass__price');
    switch(index){
        case 0:
            price.textContent = "Cena 0PLN"
            break;
        case 1:
            price.textContent = "Cena 30PLN"
            break;
        case 2:
            price.textContent = "Cena 130PLN"
            break;
        case 3:
            price.textContent = "Cena 110PLN/MSC"
            break;
        case 4:
            price.textContent = "Cena 80PLN/MSC"
            break;
    }
}
