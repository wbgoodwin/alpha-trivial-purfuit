const DataStorageController = require('../DataStorageController')
const load = require('../seeds/helpers/load-csv')
const categories = require('../seeds/categories')

let seededQuestions = []

beforeAll(async () => {
    seededQuestions = await load.loadCsv('questions.csv')
})

describe('DataStorageController tests', () => {
  test('get game questions', async () => {
    const questions = await DataStorageController.exportQuestionList()
    expect(questions).not.toHaveLength(0)
  })

  test('get game categories', async () => {
    const categories = await DataStorageController.exportCategoryList()
    expect(categories).not.toHaveLength(0)
  })

  test('read a question', async () => {
    const question = await DataStorageController.getQuestion("1")
    question['category_id'] = question['category_id'].toString()

    expect(question).toMatchObject(seededQuestions[0])
  })

  test('update categories', async () => {
    const categories = await DataStorageController.exportCategoryList()
    let updatedCategories = [...categories]
    const updatedName = 'People - EDITED'
    const updatedColor = '#000000'

    updatedCategories[0].name = updatedName
    updatedCategories[1].color = updatedColor
    await DataStorageController.updateCategories(updatedCategories)
  })

  test('add new question', async () => {
    const newQuestion = {
      category_id: "1",
      question: "New question",
      correct_answer: "Correct answer",
      incorrect_answer1: "Incorrect answer 1",
      incorrect_answer2: "Incorrect answer 2",
      incorrect_answer3: "Incorrect answer 3"
    }

    await DataStorageController.addNewQuestion(
      newQuestion.category_id,
      newQuestion.question,
      newQuestion.correct_answer,
      newQuestion.incorrect_answer1,
      newQuestion.incorrect_answer2,
      newQuestion.incorrect_answer3
    )
  })

  test('delete question', async () => {
    await DataStorageController.deleteQuestion("2")
  })

  test('edit question', async () => {
    await DataStorageController.editQuestion(
      "4",
      "4",
      "Edited question",
      "Correct answer",
      "Incorrect answer 1",
      "Incorrect answer 2",
      "Incorrect answer 3"
    )
  })

  test('upload question file', async () => {
    await DataStorageController.uploadQuestionFile([
      {
        category_id: "1",
        question: "New question 2",
        correct_answer: "Correct answer",
        incorrect_answer1: "Incorrect answer 1",
        incorrect_answer2: "Incorrect answer 2",
        incorrect_answer3: "Incorrect answer 3"
      },
      {
        category_id: "2",
        question: "New question 3",
        correct_answer: "Correct answer",
        incorrect_answer1: "Incorrect answer 1",
        incorrect_answer2: "Incorrect answer 2",
        incorrect_answer3: "Incorrect answer 3"
      }
    ])
  })
})
