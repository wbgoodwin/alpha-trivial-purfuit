import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import './Die.css'

const Die = () => {

    const [dieCanBeRolled, setDieCanBeRolled] = useState(true)
    const [rolledValue, setRolledValue] = useState(null)

    const updateDieState = (state) => {
        setDieCanBeRolled(state)
    }

    /**
     * Generates a random number 1-6.
     */
    const generateNumber = () => {
        setRolledValue(Math.floor(Math.random() * (6)) + 1)
        //updateDieState(false)
    }

    return (
        <div className="Die">
            <br/>
            <Button
                disabled={!dieCanBeRolled}
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

export default Die