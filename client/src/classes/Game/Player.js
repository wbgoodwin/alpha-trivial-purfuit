export default class Player {
  constructor(categories, color, name, startPosition) {
		this.playerName = name
    this.currentPositionX = startPosition
    this.currentPositionY = 400
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

  reinitializeLocation(boardCenter, index) {
    const yPos = 400

    switch(index) {
      case 0: {
        this.currentPositionX = boardCenter
        this.currentPositionY = yPos
        break
      }
      case 1: {
        this.currentPositionX = boardCenter + 50
        this.currentPositionY = yPos
        break
      }
      case 2: {
        this.currentPositionX = boardCenter
        this.currentPositionY = yPos + 50
        break
      }
      case 3: {
        this.currentPositionX = boardCenter + 50
        this.currentPositionY = yPos + 50
        break
      }
      default: break
    }
  }
}
