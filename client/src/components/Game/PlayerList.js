import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withGameStateContext } from '../../GameContext'

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});

const PlayerList = (props) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow style={{backgroundColor: "#cccccc"}}>
                <TableCell><strong>Player List</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.players.map((player) => {
                  if (player.playerName === props.currentPlayer.playerName) {
                      return (
                    <TableRow key={player.playerName} style={{backgroundColor: "#90EE90"}}>
                      <TableCell component="th" scope="row">
                        {player.playerName + " (curent player)"}
                      </TableCell>
                    </TableRow>);
                  }
                  else {
                    return (
                    <TableRow key={player.playerName} >
                    <TableCell component="th" scope="row">
                      {player.playerName}
                    </TableCell>
                  </TableRow>);
                  }
            })}
            </TableBody>
          </Table>
        </TableContainer>
    );
}

const mapContextToProps = (state) => ({
  players: state.players,
  currentPlayer: state.currentPlayer
})

export default withGameStateContext(PlayerList, mapContextToProps)
