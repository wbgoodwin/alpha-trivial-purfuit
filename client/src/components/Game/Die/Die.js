import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import './Die.css'
import { withGameStateContext } from '../../../GameContext'

const Die = (props) => {
    const [rolledValue, setRolledValue] = useState(null)

    /**
     * Generates a random number 1-6.
     */
    const generateNumber = () => {
      const value = Math.floor(Math.random() * (6)) + 1
      setRolledValue(value)
      props.setDieRoll(value)
    }

    return (
        <div className="Die">
            <br/>
            <Button
                disabled={props.dieRoll !== null}
                color="primary"
                variant="contained"
                onClick={generateNumber}
            >
              Roll Die
            </Button>
            <br/>
            <br/>
            {rolledValue}
        </div>
    )
}

const mapContextToProps = (state) => ({
  setDieRoll: state.actions.setDieRoll,
  dieRoll: state.dieRoll
})

export default withGameStateContext(Die, mapContextToProps)
