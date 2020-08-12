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
