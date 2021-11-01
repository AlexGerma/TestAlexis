class Card {
    constructor(tipo, numero) {
        this.tipo = tipo
        this.numero = numero
    }
}

// Funcion para crear una bajara de poker
function initialDeckOfCards(typeElement, numberElement) {
    const deckCards = []
    typeElement.forEach((type) => {
        numberElement.forEach((number) => {
            let card = new Card( type, number )
            deckCards.push(card)
        })
    })
    return deckCards
}


const completeCards = initialDeckOfCards(['trevol', 'espada', 'diamante', 'corazon'], ['as', 2, 3,4,5,6,7,8,9,10,'j','q','k']);


function compareDeckOfCards(newDeck) {
    const missingCards = []

    if (completeCards.length !== newDeck.length) {
        completeCards.forEach((element) => {
            let flag = false
            for (let index = 0; index < newDeck.length; index++) {
                const newElement = newDeck[index];
                if (element.tipo === newElement.tipo && element.numero === newElement.numero) {
                    flag = true
                    break;
                }
            }
           
            if (!flag) {
                missingCards.push(element)
            }
        })
    }
    console.log(`Te hace falta la carta ${missingCards[0].numero} de ${missingCards[0].tipo}`);
    return missingCards[0]
}

module.exports = {
    completeCards,
    compareDeckOfCards
}