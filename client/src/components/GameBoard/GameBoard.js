import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';
import BoardSquare from './BoardSquare'
import Player from '../Player'
import Die from '../Die'
import { setPlayers } from '../../controllers/GameLogicController'
import './GameBoard.css'
import { categories } from '../../controllers/AdminModuleController';
import { Modal, Checkbox, Button, TextField, MenuItem } from '@material-ui/core'

class GameBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            showPlayerSetupModal: true,

            player1Color: "",
            player2Color: "",
            player3Color: "",
            player4Color: "",

            player1Name: "",
            player2Name: "",
            player3Name: "",
            player4Name: "",

            player1IsPlaying: true,
            player2IsPlaying: true,
            player3IsPlaying: false,
            player4IsPlaying: false,

        }
        this.tokenColors = ["Blue", "Orange", "Green", "Yellow"];
        this.width = window.innerWidth;
        this.center = (this.width/2) - 400
        this.squareSide = 100;
        this.topOfBoard = 20;
    }

    async componentDidMount() {
        this.setState({
          categories: await categories()
        })

    }

    gameSetUpModal = () => {
      return (
        <div className="player-setup-modal" >
          <br/>
          <h1>Game Play Setup</h1>
          <form noValidate autoComplete="off">
            <div>
            <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} /> &nbsp;
            <TextField 
            id="standard-basic" 
            value={this.state.player1Name} 
            onChange={(event) => this.setState({player1Name: event.target.value})} 
            label="Player Name" />&nbsp;&nbsp;&nbsp;
            <TextField
              id="player1-color-select"
              select
              label="Select"
              value={this.state.player1Color}
              onChange={(event) => this.setState({player1Color: event.target.value})}
              helperText="Please select your token color"
              variant="filled"
            >
              {this.tokenColors.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            </div>
            <div>
            <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />&nbsp;
            <TextField 
            id="standard-basic" 
            value={this.state.player2Name} 
            onChange={(event) => this.setState({player2Name: event.target.value})} 
            label="Player Name" />&nbsp;&nbsp;&nbsp;
            <TextField
              id="player2-color-select"
              select
              label="Select"
              value={this.state.player2Color}
              onChange={(event) => this.setState({player2Color: event.target.value})}
              helperText="Please select your token color"
              variant="filled"
            >
              {this.tokenColors.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            </div>
            <div>
            <Checkbox checked={this.state.player3IsPlaying} onChange={() => this.setState({player3IsPlaying: !this.state.player3IsPlaying})}inputProps={{ 'aria-label': 'disabled checked checkbox' }} />&nbsp;
            <TextField 
            id="standard-basic" 
            value={this.state.player3Name} 
            onChange={(event) => this.setState({player3Name: event.target.value})} 
            label="Player Name" />&nbsp;&nbsp;&nbsp;
            <TextField
              id="player3-color-select"
              select
              label="Select"
              value={this.state.player3Color}
              onChange={(event) => this.setState({player3Color: event.target.value})}
              helperText="Please select your token color"
              variant="filled"
            >
              {this.tokenColors.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            </div>
            <div>
            <Checkbox checked={this.state.player4IsPlaying} onChange={() => this.setState({player4IsPlaying: !this.state.player4IsPlaying})} inputProps={{ 'aria-label': 'disabled checked checkbox' }} />&nbsp;
            <TextField 
            id="standard-basic" 
            value={this.state.player4Name} 
            onChange={(event) => this.setState({player4Name: event.target.value})} 
            label="Player Name" />&nbsp;&nbsp;&nbsp;
            <TextField
              id="player4-color-select"
              select
              label="Select"
              value={this.state.player4Color}
              onChange={(event) => this.setState({player4Color: event.target.value})}
              helperText="Please select your token color"
              variant="filled"
            >
              {this.tokenColors.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            </div>

          </form>

          <br/>
          <Button variant="contained" onClick={this.handleGameStartSubmit}>Start Game</Button>
        </div>
      )
    }


    handleGameStartSubmit = () => {
      this.setState({showPlayerSetupModal: false})

      let players = [new Player(this.state.player1Name, this.state.player1Color), new Player(this.state.player2Name, this.state.player2Color)];
      if (this.state.player3IsPlaying === true) {
        players.push(new Player(this.state.player3Name, this.state.player3Color))
      }
      if (this.state.player4IsPlaying === true) {
        players.push(new Player(this.state.player4Name, this.state.player4Color))
      }

      setPlayers(players)
    }


  render() {
    return (
        <div className="row">
          <Modal
            open={this.state.showPlayerSetupModal}
            onClose={this.handleGameStartSubmit}
            disableAutoFocus
            disablePortal
            disableEnforceFocus
            disableBackdropClick
            disableEscapeKeyDown
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {this.gameSetUpModal()}
          </Modal>
          <div className="column left">
            <Die />
          </div>
          <div id="board" className="column right">
          <Stage width={window.innerWidth} height={window.innerHeight}>
              <Layer>
                <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard} category={this.state.categories[0]} />
                <BoardSquare x={this.center - (3 * this.squareSide)} y={this.topOfBoard} category={this.state.categories[1]}/>
                <BoardSquare x={this.center - (2 * this.squareSide)} y={this.topOfBoard} squareFunction="roll again" category={this.state.categories[2]}/>
                <BoardSquare x={this.center - (this.squareSide)} y={this.topOfBoard} category={this.state.categories[3]}/>
                <BoardSquare x={this.center} y={this.topOfBoard}  squareFunction="headquarter" category={this.state.categories[0]}/>
                <BoardSquare x={this.center + (this.squareSide)} y={this.topOfBoard} category={this.state.categories[1]}/>
                <BoardSquare x={this.center + (2 * this.squareSide)} y={this.topOfBoard} squareFunction="roll again" category={this.state.categories[2]}/>
                <BoardSquare x={this.center + (3 * this.squareSide)} y={this.topOfBoard} category={this.state.categories[3]}/>
                <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard} category={this.state.categories[0]} />

                <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (this.squareSide)} category={this.state.categories[3]}/>
                <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (2 * this.squareSide)} squareFunction="roll again" category={this.state.categories[1]}/>
                <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (3 * this.squareSide)} category={this.state.categories[2]}/>
                <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} squareFunction="headquarter" category={this.state.categories[1]} />
                <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (5 * this.squareSide)} category={this.state.categories[3]}/>
                <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (6 * this.squareSide)} squareFunction="roll again" category={this.state.categories[1]}/>
                <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (7 * this.squareSide)} category={this.state.categories[2]}/>

                <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (this.squareSide)} category={this.state.categories[3]}/>
                <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (2 * this.squareSide)} squareFunction="roll again" category={this.state.categories[1]}/>
                <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (3 * this.squareSide)} category={this.state.categories[1]}/>
                <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} squareFunction="headquarter" category={this.state.categories[2]} />
                <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (5 * this.squareSide)} category={this.state.categories[3]}/>
                <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (6 * this.squareSide)} squareFunction="roll again" category={this.state.categories[1]}/>
                <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (7 * this.squareSide)} category={this.state.categories[2]}/>


                <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category={this.state.categories[3]} />
                <BoardSquare x={this.center - (3 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category={this.state.categories[1]}/>
                <BoardSquare x={this.center - (2 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} squareFunction="roll again" category={this.state.categories[2]}/>
                <BoardSquare x={this.center - (this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category={this.state.categories[0]}/>
                <BoardSquare x={this.center} y={this.topOfBoard + (8 * this.squareSide)} squareFunction="headquarter" category={this.state.categories[3]} />
                <BoardSquare x={this.center + (this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category={this.state.categories[1]}/>
                <BoardSquare x={this.center + (2 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} squareFunction="roll again" category={this.state.categories[2]}/>
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