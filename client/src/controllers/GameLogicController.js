let playerList = [];

let currentPlayer = null;

export function setCurrentPlayer(player) {
  currentPlayer = player;
}

export function setPlayers(players) {
  playerList = players;
  console.log(players);
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