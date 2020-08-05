import React, {Component} from 'react';
import { Rect, Group } from 'react-konva';
import Chip from './Chip'

export default class Token extends Component{

	constructor(categories, color) {
		super();
		this.color = color;
        this.listOfChips = [new Chip(categories[0].categoryColor, categories[0].categoryName),
			new Chip(categories[1].categoryColor, categories[1].categoryName),
			new Chip(categories[2].categoryColor, categories[2].categoryName),
			new Chip(categories[3].categoryColor, categories[3].categoryName)];
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
			<Group>
				<Rect x={this.x} y={this.y} width={50} height={50} fill={"black"}/>
				<Chip ref="this.listOfChips[0]"/>
				<Chip ref="this.listOfChips[1]"/>
				<Chip ref="this.listOfChips[2]"/>
				<Chip ref="this.listOfChips[3]"/>
			</Group>
		);
					
    }
}