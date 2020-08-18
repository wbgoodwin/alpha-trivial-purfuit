import * as React from 'react'
import { Rect, Group, Text } from 'react-konva'

const RollAgain = (props) => {
  return (
    <Group onClick={props.moveTokenOnClick}>
        <Rect
            x={props.x}
            y={props.y}
            width={props.width}
            height={props.width}
            fill="grey"
            stroke="black"
        />
        <Text
          x={props.x + 25}
          y={props.y + 45}
          text="Roll Again"
          fontSize={10}
        />
    </Group>
  )
}

export default RollAgain
