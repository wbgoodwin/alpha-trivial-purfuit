import * as React from 'react'
import { getQuestion } from '../../controllers/GameLogicController'

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      question: {}
    }
  }

  async componentDidMount() {
    const data = await getQuestion(1)
    this.setState({
      question: data
    })
  }

  render() {
    return (
      <div>
        {this.state.question.question}
      </div>
    )
  }
}

export default Game
