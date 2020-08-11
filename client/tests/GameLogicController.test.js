const GameLogicController = require('../src/controllers/GameLogicController')

describe('GameLogicController tests', () => {
  test('get a question', async () => {
    const category = 1

    const response = await GameLogicController.getQuestion(category)
    expect(response.category_id).toBe(category)
  })
})
