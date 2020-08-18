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
    return this.findPlayerDistance(this.props.node, this.props.dieRoll, nodesFound) !== this.props.dieRoll;
  }

  findPlayerDistance = (node, distance, nodesFound) => {

    if (node === null || node === undefined || this.nodeHasBeenFound(node, nodesFound)) {
      return -1;
    }

    let dist = -1;

    let optimalDirection = this.optimalDirection(node.x, node.y);

    if (this.playerIsOnGraphCoordinates(node.x, node.y) ||
      ((dist = this.findPlayerDistance(node[optimalDirection[0]], distance, nodesFound)) >= 0) ||
      ((dist = this.findPlayerDistance(node[optimalDirection[1]], distance, nodesFound)) >= 0)) {
        return dist + 1;
    }
    return dist;
  }

  playerIsOnGraphCoordinates = (x, y) => {
    return this.props.currentPlayer.graphCoordinates.x === x &&
      this.props.currentPlayer.graphCoordinates.y === y;
  }

  nodeHasBeenFound = (node, nodesFound) => {
    for (let i = 0; i < nodesFound.length; i++) {
      if (nodesFound[i].x === node.x && nodesFound[i].y === node.y) {
        return true;
      }
    }
    nodesFound.push(node);
    return false;
  }

  optimalDirection = (x, y) => {
    x = x - this.props.currentPlayer.graphCoordinates.x;
    y = y - this.props.currentPlayer.graphCoordinates.y;
    let degrees = Math.atan2(y, x) * (180/Math.PI);
    let moveDirection = [];

    if (degrees <= -45 && degrees > -135) {
      moveDirection.push("bottom");
    }
    else if (degrees > -45 && degrees <= 45){
      moveDirection.push("left");
    }
    else if (degrees >= 45 && degrees < 135) {
      moveDirection.push("top");
    }
    else {
      moveDirection.push("right");
    }


    if ((degrees <= -45 && degrees > -90) || (degrees >= 45 && degrees < 90)) {
      moveDirection.push("left");
    }
    else if ((degrees <= -90 && degrees > -135) || (degrees >= 90 && degrees < 135)){
      moveDirection.push("right");
    }
    else if ((degrees <= 0 && degrees > -45) || (degrees <= -135 && degrees > -180)) {
      moveDirection.push("bottom");
    }
    else {
      moveDirection.push("top");
    }

    return moveDirection;
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
        {/*<Text
          x={this.props.x + 2}
          y={this.props.y + 20}
          text={this.props.node.x + ", " + this.props.node.y}
          fontSize={10}
        />*/}
        </Group>
      )
    }
  }
}

export default BoardSquare
