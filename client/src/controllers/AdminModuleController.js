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

export async function postNewQuestion (
  category,
  questionText,
  correctAnswer,
  incorrectAnswer1,
  incorrectAnswer2,
  incorrectAnswer3
) {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        categoryID: category,
        question: questionText,
        correctAnswer: correctAnswer,
        incorrectAnswer1: incorrectAnswer1,
        incorrectAnswer2: incorrectAnswer2,
        incorrectAnswer3: incorrectAnswer3
      })
  }

  let success = false
  await fetch(`${process.env.REACT_APP_SERVER_HOST}/newQuestion`, requestOptions)
    .then(response => success = true)
    .catch(err => console.log(err))

  return success
}

export async function postEditQuestion (
  questionID,
  category,
  questionText,
  correctAnswer,
  incorrectAnswer1,
  incorrectAnswer2,
  incorrectAnswer3
) {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        questionID: questionID,
        categoryID: category,
        question: questionText,
        correctAnswer: correctAnswer,
        incorrectAnswer1: incorrectAnswer1,
        incorrectAnswer2: incorrectAnswer2,
        incorrectAnswer3: incorrectAnswer3
      })
  }

  let success = false
  await fetch(`${process.env.REACT_APP_SERVER_HOST}/editQuestion`, requestOptions)
    .then(response => success = true)
    .catch(err => console.log(err))

  return success
}

export async function postDeleteQuestion(id) {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: id
      })
  }

  let success = false
  await fetch(`${process.env.REACT_APP_SERVER_HOST}/deleteQuestion`, requestOptions)
    .then(response => success = true)
    .catch(err => console.log(err))

  return success
}

export async function getQuestions() {
  let questions = []

  await fetch(`${process.env.REACT_APP_SERVER_HOST}/questions`)
    .then(response => response.json())
    .then(data => {
      questions = data
    })
    .catch(err => console.log(err))

  return questions
}

export async function getQuestion(id) {
  let question = {}

  await fetch(`${process.env.REACT_APP_SERVER_HOST}/question/${id}`)
    .then(response => response.json())
    .then(data => {
      question = data
    })
    .catch(err => console.log(err))

  return question
}
