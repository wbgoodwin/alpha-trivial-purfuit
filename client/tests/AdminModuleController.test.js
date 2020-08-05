const AdminModuleController = require('../src/controllers/AdminModuleController')

describe('AdminModuleController tests', () => {
  test('get all categories', async () => {
    const response = await AdminModuleController.getCategories()
    expect(response).not.toBe(undefined)
  })

  test('add a new question', async () => {
    const question = {
      question: 'New question 2',
      correct_answer: 'Correct answer',
      incorrect_answer1: 'Incorrect answer 1',
      incorrect_answer2: 'Incorrect answer 2',
      incorrect_answer3: 'Incorrect answer 3',
      category_id: 1
    }

    const response = await AdminModuleController.postNewQuestion(
      question.category_id,
      question.question,
      question.correct_answer,
      question.incorrect_answer1,
      question.incorrect_answer2,
      question.incorrect_answer3
    )
    expect(response).toBe(true)
  })

  test('edit a question', async () => {
    const question = await AdminModuleController.getQuestion("1")

    let newQuestion = {...question}
    newQuestion['question'] = `EDITED ${question.question}`

    const response = await AdminModuleController.postEditQuestion(
      newQuestion.id,
      newQuestion.category_id,
      newQuestion.question,
      newQuestion.correct_answer,
      newQuestion.incorrect_answer1,
      newQuestion.incorrect_answer2,
      newQuestion.incorrect_answer3
    )
    expect(response).toBe(true)
  })

  test('delete a question', async () => {
    const response = await AdminModuleController.postDeleteQuestion("10")
    expect(response).toBe(true)
  })

  test('get all questions', async () => {
    const response = await AdminModuleController.getQuestions()
    expect(response).not.toBe(undefined)
  })

  test('get a question', async () => {
    const response = await AdminModuleController.getQuestion("1")
    expect(response).not.toBe(undefined)
  })

  test('update categories', async () => {
    const response = await AdminModuleController.updateCategories([
      {id: 1, name: 'People EDITED', color: '#F44336'},
      {id: 2, name: 'Events', color: '#000000'},
      {id: 3, name: 'Places', color: '#2196F3'},
      {id: 4, name: 'Independence Day Holiday', color: '#4CAF50'}
    ])

    expect(response).toBe(true)
  })

  test('upload question file', async () => {
    const response = await AdminModuleController.uploadQuestionFile([
      {
        question: 'New question 2',
        correct_answer: 'Correct answer',
        incorrect_answer1: 'Incorrect answer 1',
        incorrect_answer2: 'Incorrect answer 2',
        incorrect_answer3: 'Incorrect answer 3',
        category_id: 1
      },
      {
        question: 'New question 3',
        correct_answer: 'Correct answer',
        incorrect_answer1: 'Incorrect answer 1',
        incorrect_answer2: 'Incorrect answer 2',
        incorrect_answer3: 'Incorrect answer 3',
        category_id: 2
      }
    ])
    expect(response).toEqual(true)
  })

})
