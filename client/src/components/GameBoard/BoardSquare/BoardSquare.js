import React, {Component} from 'react';
import { Rect, Group, Text } from 'react-konva';
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

  playerCanNotMoveHere = () => {
    let nodesFound = [];
    console.log("distance",this.findPlayerDistance(this.props.node, 0, nodesFound));
    return this.findPlayerDistance(this.props.node, 0, nodesFound) != this.props.dieRoll;
  }

  findPlayerDistance = (node, distance, nodesFound) => {
    console.log(distance);
    if (distance > this.props.dieRoll) {
      console.log("zero");
      return 0;
    }
    if (this.playerIsOnGraphCoordinates(node.x, node.y)) {
      console.log("player is on");
      return distance;
    }
    else {
      if (node.hasLeft() && this.nodeHasNotBeenFound(node.left, nodesFound)){
        return this.findPlayerDistance(node.left, distance + 1, nodesFound);
      }
      if (node.hasRight() && this.nodeHasNotBeenFound(node.right, nodesFound)){
        return this.findPlayerDistance(node.right, distance + 1, nodesFound);
      }
      if (node.hasTop() && this.nodeHasNotBeenFound(node.top, nodesFound)){
        return this.findPlayerDistance(node.top, distance + 1, nodesFound);
      }
      if (node.hasBottom() && this.nodeHasNotBeenFound(node.bottom, nodesFound)){
        return this.findPlayerDistance(node.bottom, distance + 1, nodesFound);
      }
    }
  }

  playerIsOnGraphCoordinates = (x, y) => {
    return this.props.currentPlayer.graphCoordinates.x == x &&
      this.props.currentPlayer.graphCoordinates.y == y;
  }

  nodeHasNotBeenFound = (node, nodesFound) => {
    let item;
    for (item in nodesFound) {
      if (item.x === node.x && item.y === node.y) {
        return false;
      }
    }
    nodesFound.push(node);
    return true;
  }

  getSquareFunction = () => {
    return this.props.squareFunction
  }

  moveTokenOnClick = () => {
    if (this.playerCanNotMoveHere()) {
      return;
    }
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


    this.props.updateLocation(x, y, {x: this.props.node.x, y: this.props.node.y }, this.getSquareFunction(), this.props.category)
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
        <Group>
        <Rect
          x={this.props.x}
          y={this.props.y}
          width={this.state.width}
          height={this.state.width}
          fill={this.props.category === undefined ? "white" : this.props.category.getColor() }
          stroke="black"
          onClick={this.moveTokenOnClick}
        />
        <Text
          x={this.props.x + 2}
          y={this.props.y + 20}
          text={this.props.node.x + ", " + this.props.node.y}
          fontSize={10}
        />
        </Group>
      )
    }
  }
}

export default BoardSquare
