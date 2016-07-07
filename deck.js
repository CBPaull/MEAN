function DeckConstructor() {
	var self = this;
	var suits = ['s','h','c','d'];
	var cards = ['1','2','3','4','5','6','7','8','9','10','j','q','k'];
	this.deck = [];
	this.discard = [];
	this.createdeck = function() {
		for (i=0; i<suits.length; i++){
			for(j=0; j<cards.length; j++){
				var card = "";
				card+=suits[i];
				card+=cards[j];
				self.deck.push({"card": card, "suit": suits[i], "value": cards[j]});
			}
		}
	}
}
function DealerConstructor() {
	var self = this;
	this.hand = [];
}
function PlayerConstructor(name) {
	var self = this;
	this.name = name;
	this.hand = [];
	this.cash = 100;
}

DeckConstructor.prototype.resetdeck = function() {
	this.deck = [];
	this.createdeck();
}

DeckConstructor.prototype.reshuffledeck = function() {
	this.deck += this.discard;
	this.shuffle();
}

DeckConstructor.prototype.shuffle = function() {
	var currentIndex = this.deck.length;
	var temporaryValue = 0;
	var randomIndex = 0;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = this.deck[currentIndex];
		this.deck[currentIndex] = this.deck[randomIndex];
		this.deck[randomIndex] = temporaryValue;
	}

}

DeckConstructor.prototype.deal = function(player) {
	if (this.deck.lengh === 0) {
		this.reshuffledeck();
	}
	player.hand.push(this.deck.pop());
	return this.deck;
}

PlayerConstructor.prototype.discard = function(card, deck) {
	for (i = 0; i<this.hand.length; i++)
		if (this.hand[i] === card) {
			var temp = this.hand[i]
			this.hand[i] = this.hand[(this.hand.length-1)];
			this.hand[(this.hand.length-1)] = temp;
			deck.discard.push(this.hand.pop());
		}

}


var Deck1 = new DeckConstructor();
Deck1.createdeck();
console.log(Deck1.deck);
Deck1.shuffle();
console.log(Deck1.deck);
var Connor = new PlayerConstructor('Connor');
Deck1.deal(Connor);
Deck1.deal(Connor);
Deck1.deal(Connor);
Deck1.deal(Connor);
Deck1.deal(Connor);
console.log(Connor.hand);
console.log(Deck1.deck);
