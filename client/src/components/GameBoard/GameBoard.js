import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';
import BoardSquare from './BoardSquare'
import Die from '../Die'
import Category from '../Category'

class GameBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boardSquares: []
        }
        this.width = window.innerWidth;
        this.center = (this.width/2) + 150;
        this.squareSide = 100;
        this.topOfBoard = 100;
    }

    componentDidMount() {
        this.setState({
        boardSquares: []
        })
    }


  render() {
    return (
        <div>
        <Die />
        <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
        <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard} category="red" />
          <BoardSquare x={this.center - (3 * this.squareSide)} y={this.topOfBoard} category="red"/>
          <BoardSquare x={this.center - (2 * this.squareSide)} y={this.topOfBoard} category="yellow"/>
          <BoardSquare x={this.center - (this.squareSide)} y={this.topOfBoard} category="green"/>
          <BoardSquare x={this.center} y={this.topOfBoard} category="red"/>
          <BoardSquare x={this.center + (this.squareSide)} y={this.topOfBoard} category="orange"/>
          <BoardSquare x={this.center + (2 * this.squareSide)} y={this.topOfBoard} category="blue"/>
          <BoardSquare x={this.center + (3 * this.squareSide)} y={this.topOfBoard} category="yellow"/>
          <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard} category="red" />

          <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (this.squareSide)} category="red"/>
          <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (2 * this.squareSide)} category="yellow"/>
          <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (3 * this.squareSide)} category="green"/>
          <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category="red" />
          <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (5 * this.squareSide)} category="orange"/>
          <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (6 * this.squareSide)} category="blue"/>
          <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (7 * this.squareSide)} category="yellow"/>

          <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (this.squareSide)} category="red"/>
          <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (2 * this.squareSide)} category="yellow"/>
          <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (3 * this.squareSide)} category="green"/>
          <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category="red" />
          <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (5 * this.squareSide)} category="orange"/>
          <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (6 * this.squareSide)} category="blue"/>
          <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (7 * this.squareSide)} category="yellow"/>


          <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category="red" />
          <BoardSquare x={this.center - (3 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category="red"/>
          <BoardSquare x={this.center - (2 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category="yellow"/>
          <BoardSquare x={this.center - (this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category="green"/>
          <BoardSquare x={this.center} y={this.topOfBoard + (8 * this.squareSide)} category="red" />
          <BoardSquare x={this.center + (this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category="orange"/>
          <BoardSquare x={this.center + (2 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category="blue"/>
          <BoardSquare x={this.center + (3 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category="yellow"/>
          <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category="red" />


          <BoardSquare x={this.center } y={this.topOfBoard + (this.squareSide)} category="red"/>
          <BoardSquare x={this.center} y={this.topOfBoard + (2 * this.squareSide)} category="yellow"/>
          <BoardSquare x={this.center} y={this.topOfBoard + (3 * this.squareSide)} category="green"/>
          <BoardSquare x={this.center} y={this.topOfBoard + (4 * this.squareSide)} category="red" />
          <BoardSquare x={this.center} y={this.topOfBoard + (5 * this.squareSide)} category="orange"/>
          <BoardSquare x={this.center} y={this.topOfBoard + (6 * this.squareSide)} category="blue"/>
          <BoardSquare x={this.center} y={this.topOfBoard + (7 * this.squareSide)} category="yellow"/>

          <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (4* this.squareSide)} category="red" />
          <BoardSquare x={this.center - (3 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category="red"/>
          <BoardSquare x={this.center - (2 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category="yellow"/>
          <BoardSquare x={this.center - (this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category="green"/>
          <BoardSquare x={this.center} y={this.topOfBoard + (4 * this.squareSide)} category="red" />
          <BoardSquare x={this.center + (this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category="orange"/>
          <BoardSquare x={this.center + (2 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category="blue"/>
          <BoardSquare x={this.center + (3 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category="yellow"/>
          <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category="red" />
          
        </Layer>
      </Stage>
      </div>
    )
  }

    
}

export default GameBoard