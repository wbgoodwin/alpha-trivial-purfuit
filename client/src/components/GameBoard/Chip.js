import React, {Component} from 'react';
import { Rect } from 'react-konva';
import Category from '../Category'

export default class Chip extends Component {
    constructor(color, name) {
		super();
        this.isTaken = false;
		this.category = new Category(arguments);
    }
	
	setAvailability() {
		this.isTaken = true;
	}
	
	render() {
        return  (<Rect
                        x={this.x}
                        y={this.y}
                        width={12}
                        height={12}
                        fill={this.props.category.categoryColor}
                    />);
    }

}