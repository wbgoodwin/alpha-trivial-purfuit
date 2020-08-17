import React, {Component} from 'react';
import { Rect } from 'react-konva';
import RollAgain from './RollAgain'
import Headquarter from './Headquarter'
import CenterHub from './CenterHub'

class BoardSquare extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tokensOnSquare: 0,
      width: 100
    }
  }

  getSquareFunction = () => {
    return this.props.squareFunction
  }

  moveTokenOnClick = () => {
    const { tokensOnSquare, width } = this.state
    let numTokens = tokensOnSquare + 1

    let x = this.props.x
    let y = this.props.y

    switch(numTokens) {
      case 1: break
      case 2: {
        x = this.props.x + width / 2
        console.log(x)
        break
      }
      case 3: {
        y = this.props.y + width / 2
        break
      }
      case 4: {
        x = this.props.x + width / 2
        y = this.props.y + width / 2
        break
      }
      default: break
    }

    console.log(numTokens)
    console.log(x)
    this.props.updateLocation(x, y, this.getSquareFunction(), this.props.category)
    this.setState({
      tokensOnSquare: numTokens
    })
  }

  render() {
    switch(this.props.squareFunction) {
      case 'center hub': return (
        <CenterHub
          x={this.props.x}
          y={this.props.y}
          width={this.state.width}
          moveTokenOnClick={this.moveTokenOnClick}
          categories={this.props.category}
        />
      )
      case 'roll again': return (
        <RollAgain
          x={this.props.x}
          y={this.props.y}
          width={this.state.width}
          moveTokenOnClick={this.moveTokenOnClick}
        />
      )
      case 'headquarter': return (
        <Headquarter
          x={this.props.x}
          y={this.props.y}
          width={this.state.width}
          moveTokenOnClick={this.moveTokenOnClick}
          category={this.props.category}
        />
      )
      default: return (
        <Rect
          x={this.props.x}
          y={this.props.y}
          width={this.state.width}
          height={this.state.width}
          fill={this.props.category === undefined ? "white" : this.props.category.getColor() }
          stroke="black"
          onClick={this.moveTokenOnClick}
        />
      )
    }
  }
}

export default BoardSquare
