import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';
import BoardSquare from './BoardSquare'
import Die from '../Die'
import './GameBoard.css'
import { categories } from '../../controllers/AdminModuleController';

class GameBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boardSquares: [],
            categories: []
        }
        let pageWidth = window.innerWidth
        this.width = window.innerWidth;
        this.center = (this.width/2) + 150;
        this.squareSide = 100;
        this.topOfBoard = 20;
    }

    async componentDidMount() {
        this.setState({
          boardSquares: [],
          categories: await categories()
        })

    }


  render() {
    return (
        <div className="row">
          <div className="column left">
            <Die />
          </div>
          <div id="board" className="column right">
          <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
        <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard} category={this.state.categories[0]} />
          <BoardSquare x={this.center - (3 * this.squareSide)} y={this.topOfBoard} category={this.state.categories[1]}/>
          <BoardSquare x={this.center - (2 * this.squareSide)} y={this.topOfBoard} category={this.state.categories[2]}/>
          <BoardSquare x={this.center - (this.squareSide)} y={this.topOfBoard} category={this.state.categories[3]}/>
          <BoardSquare x={this.center} y={this.topOfBoard}  squareFunction="headquarter" category={this.state.categories[0]}/>
          <BoardSquare x={this.center + (this.squareSide)} y={this.topOfBoard} squareFunction="roll again" category={this.state.categories[1]}/>
          <BoardSquare x={this.center + (2 * this.squareSide)} y={this.topOfBoard} category={this.state.categories[2]}/>
          <BoardSquare x={this.center + (3 * this.squareSide)} y={this.topOfBoard} category={this.state.categories[3]}/>
          <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard} category={this.state.categories[0]} />

          <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (this.squareSide)} category={this.state.categories[3]}/>
          <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (2 * this.squareSide)} category={this.state.categories[1]}/>
          <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (3 * this.squareSide)} category={this.state.categories[2]}/>
          <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} squareFunction="headquarter" category={this.state.categories[1]} />
          <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (5 * this.squareSide)} squareFunction="roll again" category={this.state.categories[3]}/>
          <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (6 * this.squareSide)} category={this.state.categories[1]}/>
          <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (7 * this.squareSide)} category={this.state.categories[2]}/>

          <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (this.squareSide)} category={this.state.categories[3]}/>
          <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (2 * this.squareSide)} category={this.state.categories[1]}/>
          <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (3 * this.squareSide)} squareFunction="roll again" category={this.state.categories[2]}/>
          <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)}  squareFunction="headquarter" category={this.state.categories[2]} />
          <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (5 * this.squareSide)} category={this.state.categories[3]}/>
          <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (6 * this.squareSide)} category={this.state.categories[1]}/>
          <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (7 * this.squareSide)} category={this.state.categories[2]}/>


          <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category={this.state.categories[3]} />
          <BoardSquare x={this.center - (3 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category={this.state.categories[1]}/>
          <BoardSquare x={this.center - (2 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category={this.state.categories[2]}/>
          <BoardSquare x={this.center - (this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} squareFunction="roll again" category={this.state.categories[0]}/>
          <BoardSquare x={this.center} y={this.topOfBoard + (8 * this.squareSide)} squareFunction="headquarter" category={this.state.categories[3]} />
          <BoardSquare x={this.center + (this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category={this.state.categories[1]}/>
          <BoardSquare x={this.center + (2 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category={this.state.categories[2]}/>
          <BoardSquare x={this.center + (3 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category={this.state.categories[3]}/>
          <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category={this.state.categories[0]} />


          <BoardSquare x={this.center } y={this.topOfBoard + (this.squareSide)} category={this.state.categories[0]}/>
          <BoardSquare x={this.center} y={this.topOfBoard + (2 * this.squareSide)} category={this.state.categories[1]}/>
          <BoardSquare x={this.center} y={this.topOfBoard + (3 * this.squareSide)} category={this.state.categories[2]}/>
          <BoardSquare x={this.center} y={this.topOfBoard + (4 * this.squareSide)} category={this.state.categories[3]} />
          <BoardSquare x={this.center} y={this.topOfBoard + (5 * this.squareSide)} category={this.state.categories[0]}/>
          <BoardSquare x={this.center} y={this.topOfBoard + (6 * this.squareSide)} category={this.state.categories[1]}/>
          <BoardSquare x={this.center} y={this.topOfBoard + (7 * this.squareSide)} category={this.state.categories[2]}/>

          <BoardSquare x={this.center - (3 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category={this.state.categories[1]}/>
          <BoardSquare x={this.center - (2 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category={this.state.categories[2]}/>
          <BoardSquare x={this.center - (this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category={this.state.categories[3]}/>
          <BoardSquare x={this.center} y={this.topOfBoard + (4 * this.squareSide)} squareFunction="center hub" category={this.state.categories} />
          <BoardSquare x={this.center + (this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category={this.state.categories[1]}/>
          <BoardSquare x={this.center + (2 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category={this.state.categories[2]}/>
          <BoardSquare x={this.center + (3 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category={this.state.categories[3]}/>
          
        </Layer>
      </Stage>
          </div>
      </div>
    )
  }

    
}

export default GameBoard