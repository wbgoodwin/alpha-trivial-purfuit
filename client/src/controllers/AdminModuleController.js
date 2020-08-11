import Category from '../components/Category'

export const categories = async () => {
  let categories = await getCategories();
  return [new Category(categories[0].color, categories[0].name), new Category(categories[1].color, categories[1].name),
   new Category(categories[2].color, categories[2].name), new Category(categories[3].color, categories[3].name)]
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

export async function updateCategories(categories) {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        categories: categories
      })
  }

  let success = false
  await fetch(`${process.env.REACT_APP_SERVER_HOST}/updateCategories`, requestOptions)
    .then(response => success = true)
    .catch(err => console.log(err))

  return success
}

export async function uploadQuestionFile(questions) {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        questions: questions
      })
  }

  let success = false
  await fetch(`${process.env.REACT_APP_SERVER_HOST}/uploadQuestionFile`, requestOptions)
    .then(response => success = true)
    .catch(err => console.log(err))

  return success
}
