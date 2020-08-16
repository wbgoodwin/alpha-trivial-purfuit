import React, {Component} from 'react';
import { Rect, Group } from 'react-konva';
import Chip from './Chip'

class Token extends Component{
	constructor(props) {
		super(props);
		this.state = {
			x: props.startPosition,
			y: 20,
		}
		this.width = 50;
		this.color = props.color;
		this.x = props.startPosition + 10;
		this.y = 20;
		this.chip1 = React.createRef();
		this.chip2 = React.createRef();
		this.chip3 = React.createRef();
		this.chip4 = React.createRef();
        this.listOfChips = [<Chip ref={this.chip1} x={this.state.x + 5} y={this.state.y + 5} tokenColor={props.color} categoryColor={props.categories[0].categoryColor} name={props.categories[0].categoryName} />,
			<Chip ref={this.chip2} x={this.state.x + 25} y={this.state.y + 5} tokenColor={props.color} categoryColor={props.categories[1].categoryColor} name={props.categories[1].categoryName} />,
			<Chip ref={this.chip3} x={this.state.x + 25} y={this.state.y + 25} tokenColor={props.color} categoryColor={props.categories[2].categoryColor} name={props.categories[2].categoryName} />,
			<Chip ref={this.chip4} x={this.state.x+ 5} y={this.state.y + 25} tokenColor={props.color} categoryColor={props.categories[3].categoryColor} name={props.categories[3].categoryName} />];
    }

	updateChipList(category) {
		this.listOfChips.forEach(function(element) {
			if(element.category.categoryName === category)
			{
				return element.setAvailability();
			}
		});
	}

	checkChip(category) {
		this.listOfChips.forEach(function(element) {
			if(element.category.categoryName === category)
			{
				return element.isTaken;
			}
		});
	}

	isFull() {
		this.listOfChips.forEach(function(element) {
			if(element.isTaken === false)
			{
				return false;
			}
		});

		return true;
	}

	getChipList() {
		return this.listOfChips;
	}

	updateLocation(x,y) {
		this.setState({
			x: x,
			y: y,
		});
		this.chip1.current.updateLocation(x + 5, y + 5);
		this.chip2.current.updateLocation(x + 25, y + 5);
		this.chip3.current.updateLocation(x + 5, y + 25);
		this.chip4.current.updateLocation(x + 25, y + 25);
	}

	render() {
        return(
			<Group key={this.color}>
				<Rect x={this.state.x} y={this.state.y} width={this.width} height={this.width} fill={this.color}/>
				{this.listOfChips[0]}
				{this.listOfChips[1]}
				{this.listOfChips[2]}
				{this.listOfChips[3]}
			</Group>
		)
  }
}

export default Token
