import * as React from 'react'
import { Rect, Circle, Group } from 'react-konva'

const Headquarter = (props) => {
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
        <Circle
          x={props.x + props.width / 2}
          y={props.y + props.width / 2}
          radius={props.width / 2}
          fill={props.category === undefined ? "grey" : props.category.getColor()}
        />
    </Group>
  )
}

export default Headquarter
