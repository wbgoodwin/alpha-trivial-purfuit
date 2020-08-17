import React, {Component} from 'react';
import { Rect, Group } from 'react-konva';
import Chip from './Chip'

class Token extends Component {
	constructor(props) {
		super(props)

		this.state = {
			width: 50
		}

		this.chip1 = React.createRef()
		this.chip2 = React.createRef()
		this.chip3 = React.createRef()
		this.chip4 = React.createRef()

		this.awardPlayerChip = this.awardPlayerChip.bind(this)
  }

	awardPlayerChip(categoryId) {
		this.props.player.addChip(categoryId)
	}

	render() {
  	return (
			<Group key={this.props.color}>
				<Rect
					x={this.props.x}
					y={this.props.y}
					width={this.state.width}
					height={this.state.width}
					fill={this.props.color}
				/>
				<Chip
					ref={this.chip1}
					x={this.props.x + 5}
					y={this.props.y + 5}
					tokenColor={this.props.color}
					categoryColor={this.props.categories[0].categoryColor}
					categoryId={this.props.categories[0].categoryId}
					name={this.props.categories[0].categoryName}
					awardPlayerChip={this.awardPlayerChip}
				/>
				<Chip
					ref={this.chip2}
					x={this.props.x + 25}
					y={this.props.y + 5}
					tokenColor={this.props.color}
					categoryColor={this.props.categories[1].categoryColor}
					categoryId={this.props.categories[1].categoryId}
					name={this.props.categories[1].categoryName}
					awardPlayerChip={this.awardPlayerChip}
				/>
				<Chip
					ref={this.chip3}
					x={this.props.x + 25}
					y={this.props.y + 25}
					tokenColor={this.props.color}
					categoryColor={this.props.categories[2].categoryColor}
					categoryId={this.props.categories[2].categoryId}
					name={this.props.categories[2].categoryName}
					awardPlayerChip={this.awardPlayerChip}
				/>
				<Chip
					ref={this.chip4}
					x={this.props.x + 5}
					y={this.props.y + 25}
					tokenColor={this.props.color}
					categoryColor={this.props.categories[3].categoryColor}
					categoryId={this.props.categories[3].categoryId}
					name={this.props.categories[3].categoryName}
					awardPlayerChip={this.awardPlayerChip}
				/>
			</Group>
		)
  }
}

export default Token
