"use strict";
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        var pickedCard = Math.floor(Math.random() * 52);
        var pickedSuit = Math.floor(pickedCard / 13);
        return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    }
};
var cardPicker = deck.createCardPicker();
//let pickedCard = cardPicker();
//alert("card: " + pickedCard.card + " of " + pickedCard.suit);
alert("card: " + cardPicker.card + " of " + cardPicker.suit);
//# sourceMappingURL=lesson6.js.map