import Player from '../classes/Game/Player'
import Category from '../classes/Game/Category'


export default class GameLogicController {
	constructor(categories, players) {
		this.categories = categories

		this.playerList = []
		let xStartPosition = (window.innerWidth / 2 - 400)
		let yStartPosition = 420
		let xposition = xStartPosition
		let yposition = yStartPosition

		for (let p in players) {
			const player = players[p]
			this.playerList.push(new Player(categories, player.color, player.name, xposition, yposition))
			if (xposition - xStartPosition < 50){
				xposition += 50
			}
			else{
				xposition = xStartPosition
				yposition += 50
			}
		}

		this.playerList = this.shufflePlayers(this.playerList);
		this.setCurrentPlayer(this.playerList[0])
  }

	getCategories() {
		return this.categories
	}

	setCurrentPlayer(player) {
		this.currentPlayer = player;
  }

  getCurrentPlayer() {
    return this.currentPlayer;
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

  getAllPlayers = () => {
    return this.playerList.map(player => {
      if (player.name !== ""){
        return player
      }
    })
  }

  shufflePlayers = (array) => {
	let currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

	  // Pick a remaining element...
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex -= 1;

	  // And swap it with the current element.
	  temporaryValue = array[currentIndex];
	  array[currentIndex] = array[randomIndex];
	  array[randomIndex] = temporaryValue;
	}

	return array;
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

export const retrieveCategories = async () => {
  let categories = await getCategories();

	return categories.map(c => new Category(c.id, c.color, c.name))
}
