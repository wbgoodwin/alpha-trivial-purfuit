export default class Player {
  constructor(categories, color, name, startPosition) {
		this.playerName = name
    this.currentPositionX = startPosition
    this.currentPositionY = 0
    this.color = color
    this.chipsEarned = {
      1: false,
      2: false,
      3: false,
      4: false
    }
	}

	updateTokenLocation(x, y) {
		this.currentPositionX = x
    this.currentPositionY = y
	}

  addChip(categoryId) {
    this.chipsEarned[categoryId] = true
  }

	isTokenFull() {
		return Object.keys(this.chipsEarned).reduce((a, v) => a && this.chipsEarned[v])
	}

  getName() {
    return this.playerName
  }
}
