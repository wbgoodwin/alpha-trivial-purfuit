import * as React from 'react'
import { Rect, Group } from 'react-konva'
import Chip from './Chip'
import './GameBoard.css'

const Token = (props) => {
	const [width, ] = React.useState(50)

	return (
		<Group key={props.color}>
			<Rect
				x={props.x}
				y={props.y}
				width={width}
				height={width}
				fill={props.color}
			/>
			<Chip
				x={props.x + 5}
				y={props.y + 5}
				tokenColor={props.color}
				categoryColor={props.categories[0].categoryColor}
				isTaken={props.player.chipsEarned[1]}
			/>
			<Chip
				x={props.x + 25}
				y={props.y + 5}
				tokenColor={props.color}
				categoryColor={props.categories[1].categoryColor}
				isTaken={props.player.chipsEarned[2]}
			/>
			<Chip
				x={props.x + 25}
				y={props.y + 25}
				tokenColor={props.color}
				categoryColor={props.categories[2].categoryColor}
				isTaken={props.player.chipsEarned[3]}
			/>
			<Chip
				x={props.x + 5}
				y={props.y + 25}
				tokenColor={props.color}
				categoryColor={props.categories[3].categoryColor}
				isTaken={props.player.chipsEarned[4]}
			/>
		</Group>
	)
}

export default Token
