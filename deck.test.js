const {completeCards,compareDeckOfCards} = require('./deck')

test('Implementar un método que tome como argumento un mazo de cartas, el cual estará incompleto porque le faltará una carta. El método debe determinar cuál es la carta que hace falta. ', () => {
    const newDeck = completeCards.slice()
    const indexCard = Math.floor(Math.random() * (completeCards.length-1))
    newDeck.splice(indexCard,1)
    const expectedCard = completeCards[indexCard]
    console.log(expectedCard);
    const result = compareDeckOfCards(newDeck)
    expect(expectedCard).toBe(result);
});