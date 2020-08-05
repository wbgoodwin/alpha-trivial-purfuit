import Token from './Token'

export default class Player {
    constructor(categories, color, name) {
		this.playerName = name;
		this.token = new Token( categories, color );
    }
	
	updateTokenLocation(x,y) {
		this.token.updateLocation(x,y);
	}
	
	isTokenFull() {
		return this.token.isFull();
	}
	
	checkTokenChips(category) {
		return this.token.checkTokenChips(category);
	}
	
	addChipToToken(category) {
		this.token.updateChipList(category);
	}

}