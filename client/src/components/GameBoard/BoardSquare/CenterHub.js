import * as React from 'react'
import { Rect, Group } from 'react-konva'

const CenterHub = (props) => {
  return (
    <Group onClick={props.moveTokenOnClick}>
        <Rect
            x={props.x}
            y={props.y}
            width={props.width / 2}
            height={props.width / 2}
            fill={props.categories[0] === undefined ? "white" : props.categories[0].getColor()}
        />
        <Rect
            x={props.x}
            y={props.y + props.width / 2}
            width={props.width / 2}
            height={props.width / 2}
            fill={props.categories[1] === undefined ? "white" : props.categories[1].getColor()}
        />
        <Rect
            x={props.x + props.width / 2}
            y={props.y}
            width={props.width / 2}
            height={props.width / 2}
            fill={props.categories[2] === undefined ? "white" : props.categories[2].getColor()}
        />
        <Rect
            x={props.x + props.width / 2}
            y={props.y + props.width / 2}
            width={props.width / 2}
            height={props.width / 2}
            fill={props.categories[3] === undefined ? "white" : props.categories[3].getColor()}
        />
    </Group>
  )
}

export default CenterHub
