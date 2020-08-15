import * as React from 'react'
import {
  Grid, Paper, Table, TableBody, TableRow, TableCell,
  TextField, MenuItem, Button, Checkbox
} from '@material-ui/core'
import { colorMapping } from '../../colors'


class GameSettings extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      player1Name: "",
      player2Name: "",
      player3Name: "",
      player4Name: "",

      player1Color: "",
      player2Color: "",
      player3Color: "",
      player4Color: "",

      player2Active: false,
      player3Active: false,
      player4Active: false,

      allEntered: false
    }

    this.renderPlayer = this.renderPlayer.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
    this.handleActiveChange = this.handleActiveChange.bind(this)
    this.isCheckDisabled = this.isCheckDisabled.bind(this)
    this.isDisabled = this.isDisabled.bind(this)
    this.checkAllEntered = this.checkAllEntered.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidUpdate() {
    this.checkAllEntered()
  }

  renderPlayer(name, color, active, index) {
    return (
      <TableRow>
        <TableCell>
          <Checkbox
            disabled={this.isCheckDisabled(index)}
            checked={index === 1 ? true : active}
            onChange={() => this.handleActiveChange(index)}
          />
        </TableCell>

        <TableCell>
          <TextField
            disabled={!this.isDisabled(index)}
            value={name}
            onChange={(event) => this.handleNameChange(event, index)}
            label="Player Name"
          />
        </TableCell>

        <TableCell>
          <TextField
            disabled={!this.isDisabled(index)}
            select
            label="Select"
            value={color}
            onChange={(event) => this.handleColorChange(event, index)}
            helperText="Please select your token color"
            variant="filled"
          >
            {Object.keys(colorMapping).map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
             ))
            }
          </TextField>
        </TableCell>
      </TableRow>
    )
  }

  handleNameChange(event, index) {
    const val = event.target.value

    switch(index) {
      case 1:  {
        this.setState({player1Name: val})
        break
      }
      case 2: {
        this.setState({player2Name: val})
        break
      }
      case 3: {
        this.setState({player3Name: val})
        break
      }
      case 4: {
        this.setState({player4Name: val})
        break
      }
      default: break
    }
  }

  handleColorChange(event, index) {
    const val = event.target.value

    switch(index) {
      case 1:  {
        this.setState({player1Color: val})
        break
      }
      case 2: {
        this.setState({player2Color: val})
        break
      }
      case 3: {
        this.setState({player3Color: val})
        break
      }
      case 4: {
        this.setState({player4Color: val})
        break
      }
      default: break
    }
  }

  handleActiveChange(index) {
    switch(index) {
      case 2: {
        this.setState({ player2Active: !this.state.player2Active })
        break
      }
      case 3: {
        this.setState({ player3Active: !this.state.player3Active })
        break
      }
      case 4: {
        this.setState({ player4Active: !this.state.player4Active })
        break
      }
      default: {}
    }
  }

  isCheckDisabled(index) {
    switch(index) {
      case 1: return true
      case 2: return false
      case 3: return !this.state.player2Active
      case 4: return !this.state.player3Active
      default: return false
    }
  }

  isDisabled(index) {
    switch(index) {
      case 1: return true
      case 2: return this.state.player2Active
      case 3: return this.state.player2Active && this.state.player3Active
      case 4: return this.state.player2Active && this.state.player3Active && this.state.player4Active
      default: return false
    }
  }

  checkAllEntered() {
    const {
      player1Name, player1Color, player2Name, player2Color, player3Name,
      player3Color, player4Name, player4Color, player2Active,
      player3Active, player4Active
    } = this.state

    let allEntered = true
    let allDifferent = true

    allEntered = allEntered && (player1Name !== "") && (player1Color !== "")

    if (player2Active) {
      allEntered = allEntered && (player2Name !== "") && (player2Color !== "")
      allDifferent = allDifferent && (player1Color !== player2Color)
    }
    if (player3Active) {
      allEntered = allEntered && (player3Name !== "") && (player3Color !== "")
      allDifferent = allDifferent && (player1Color !== player3Color) &&
                     (player2Color !== player3Color)
    }
    if (player4Active) {
      allEntered = allEntered && (player4Name !== "") && (player4Color !== "")
      allDifferent = allDifferent && (player1Color !== player4Color) &&
                     (player2Color !== player4Color) &&
                     (player3Color !== player4Color)
    }

    if (this.state.allEntered !== (allEntered && allDifferent)) {
      this.setState({
        allEntered: allEntered && allDifferent
      })
    }
  }

  handleSubmit() {
    let players = [
      {
        name: this.state.player1Name,
        color: this.state.player1Color
      }
    ]

    if (this.state.player2Active) {
      players.push({
        name: this.state.player2Name,
        color: this.state.player2Color
      })
    }
    if (this.state.player3Active) {
      players.push({
        name: this.state.player3Name,
        color: this.state.player3Color
      })
    }
    if (this.state.player4Active) {
      players.push({
        name: this.state.player4Name,
        color: this.state.player4Color
      })
    }

    this.props.handleSubmit(players)
  }

  render() {
    const {
      player1Name, player1Color, player2Name, player2Color, player3Name,
      player3Color, player4Name, player4Color, player1Active, player2Active,
      player3Active, player4Active
    } = this.state

    return (
      <Grid container justify="center" alignItems="center">
        <Paper style={{
            'marginTop': '15px',
            'width': '80%'
          }}
        >
          <h1 style={{'marginLeft': '20px'}}>Game Play Setup</h1>
          <form noValidate autoComplete="off">
            <Table>
              <TableBody>
                {this.renderPlayer(player1Name, player1Color, player1Active, 1)}
                {this.renderPlayer(player2Name, player2Color, player2Active, 2)}
                {this.renderPlayer(player3Name, player3Color, player3Active, 3)}
                {this.renderPlayer(player4Name, player4Color, player4Active, 4)}
              </TableBody>
            </Table>
          </form>

          <br/>
          <Button
            color="primary"
            disabled={!this.state.allEntered}
            variant="contained"
            onClick={this.handleSubmit}
            style={{
              'marginLeft': '20px',
              'marginBottom': '20px'
            }}
          >
            Start Game
          </Button>
        </Paper>
      </Grid>
    )
  }
}

export default GameSettings
