import Player from '../classes/Game/Player'
import Category from '../classes/Game/Category'


export default class GameLogicController {
	constructor(categories, players) {
		this.categories = categories

		this.playerList = []
		let position = 0

		for (let p in players) {
			const player = players[p]
			this.playerList.push(new Player(categories, player.color, player.name, position))

			position += 60
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

<<<<<<< HEAD
  getCurrentPlayer = () => {
    return this.currentPlayer;
  }

	constructor(categories, colors, names) {
		this.playerList = [new Player(categories, colors[0], names[0], 0),
			new Player(categories, colors[1], names[1], 60),
			new Player(categories, colors[2], names[2], 120),
			new Player(categories, colors[3], names[3], 180)];
    this.setCurrentPlayer(this.playerList[0]);
  }

=======
  getCurrentPlayer() {
    return this.currentPlayer;
  }

>>>>>>> master
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
<<<<<<< HEAD
=======

export const retrieveCategories = async () => {
  let categories = await getCategories();

	return categories.map(c => new Category(c.id, c.color, c.name))
}

export async function retrieveQuestionAnswersSet(categoryName) {
  let question = {}

  await fetch(`${process.env.REACT_APP_SERVER_HOST}/getRandomQuestionByCategory/${categoryName}`)
    .then(response => response.json())
    .then(data => {
      question = data
    })
    .catch(err => console.log(err))

  return question
}
>>>>>>> master
