import React, {Component} from 'react';
import { Rect, Group } from 'react-konva';
import Chip from './Chip'
import './GameBoard.css'

export default class Token extends Component{

	constructor(props) {
		super(props);
		this.color = props.color;
		this.x = props.xPosition;
		this.y = props.yPosition;
        this.listOfChips = [<Chip x={this.x + 5} y={this.y + 5} tokenColor={props.color} categoryColor={props.categories[0].categoryColor} name={props.categories[0].categoryName} />,
			<Chip x={this.x + 25} y={this.y + 5} tokenColor={props.color} categoryColor={props.categories[1].categoryColor} name={props.categories[1].categoryName} />,
			<Chip x={this.x + 25} y={this.y + 25} tokenColor={props.color} categoryColor={props.categories[2].categoryColor} name={props.categories[2].categoryName} />,
			<Chip x={this.x+ 5} y={this.y + 25} tokenColor={props.color} categoryColor={props.categories[3].categoryColor} name={props.categories[3].categoryName} />];
	}
	
	style={

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
		this.x = x;
		this.y = y;
		this.listOfChips[0].x = x;
		this.listOfChips[0].y = y;
		this.listOfChips[1].x = x + 13;
		this.listOfChips[1].y = y;
		this.listOfChips[2].x = x;
		this.listOfChips[2].y = y + 13;
		this.listOfChips[3].x = x + 13;
		this.listOfChips[3].y = y + 13;
	}

	render() {
        return(
			<Group key={this.color}
			draggable
			>
				<Rect x={this.x} y={this.y} width={50} height={50} fill={this.color } stroke="black"/>
				{this.listOfChips[0]}
				{this.listOfChips[1]}
				{this.listOfChips[2]}
				{this.listOfChips[3]}
			</Group>
		);

    }
}
