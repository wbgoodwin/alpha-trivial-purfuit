import * as React from 'react'
import { Rect } from 'react-konva'

const Chip = (props) => {
  return (
    <Rect
      x={props.x}
      y={props.y}
      width={20}
      height={20}
      fill={props.isTaken ? props.categoryColor : props.tokenColor}
    />
  )
}

export default Chip
