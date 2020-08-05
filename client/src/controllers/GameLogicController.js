import Player from '../components/GameBoard/Player'



export default class GameLogicController {

	setCurrentPlayer(player) {
		this.currentPlayer = player;
	}

	constructor(categories, colors, names) {
		this.playerList = [new Player(categories, colors[0], names[0]),
			new Player(categories, colors[1], names[1]),
			new Player(categories, colors[2], names[2]),
			new Player(categories, colors[3], names[3])];
		this.setCurrentPlayer(this.playerList[0]);
	}
	
	getNextPlayer() {
		if(this.currentPlayer === this.playerList[0])
			return this.playerList[1];
		
		if(this.currentPlayer === this.playerList[1])
			return this.playerList[2];
		
		if(this.currentPlayer === this.playerList[2])
			return this.playerList[3];
		
		return this.playerList[0];
	}
	
	updateTokenLocation(x,y) {
		this.currentPlayer.updateTokenLocation(x,y);
	}
}

export async function getQuestion(categoryID) {
	let question = {}

	await fetch(`${process.env.REACT_APP_SERVER_HOST}/readQuestion/${categoryID}`)
		.then(response => response.json())
		.then(data => {
		question = data
	})
	.catch(err => console.log(err))

	return question
}

export async function getCategories() {
	let categories = []

	await fetch(`${process.env.REACT_APP_SERVER_HOST}/categories`)
		.then(response => response.json())
		.then(data => {
			categories = data
	})
	.catch(err => console.log(err))

	return categories
}