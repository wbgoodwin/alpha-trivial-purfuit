import * as React from 'react'
import { getQuestion } from '../../controllers/GameLogicController'
import GameBoard from '../../components/GameBoard/GameBoard'
import Nav from '../../components/Nav'
import Breadcrumbs from '../../components/Breadcrumbs'

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
        <Nav/>
        <Breadcrumbs
        links={[
          {to: '/', name: 'Home'}
        ]}
        currentPage="Game"
      />
        <GameBoard />
      </div>
    )
  }
}

export default Game
