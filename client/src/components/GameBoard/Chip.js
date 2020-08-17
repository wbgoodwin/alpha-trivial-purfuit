import React, {Component} from 'react';
import { Rect } from 'react-konva';

export default class Chip extends Component {
  constructor(props) {
		super(props)

    this.state = {
      isTaken: false
    }
  }

	setAvailability = () => {
    this.props.awardPlayerChip(this.props.categoryId)

    this.setState({
      isTaken: true
    })
	}

	render() {
    return (
      <Rect
        onDblClick={this.setAvailability}
        x={this.props.x}
        y={this.props.y}
        width={20}
        height={20}
        fill={this.state.isTaken ? this.props.categoryColor : this.props.tokenColor}
      />
    )
  }

}
