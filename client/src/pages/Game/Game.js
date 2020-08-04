import * as React from 'react'
import { getQuestion } from '../../controllers/GameLogicController'
import GameBoard from '../../components/GameBoard/GameBoard'

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      question: {}
    }
  }

  async componentDidMount() {
    //const data = await getQuestion(1)
    /* this.setState({
      question: data
    }) */
  }

  render() {
    return (
      <div>
        <GameBoard />
      </div>
    )
  }
}

export default Game
