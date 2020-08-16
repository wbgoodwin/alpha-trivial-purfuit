import React, {Component} from 'react';
import { Rect } from 'react-konva';
import Category from '../../classes/Game/Category'

export default class Chip extends Component {
    constructor(props) {
		super(props);
        this.isTaken = false;
        this.category = new Category(arguments);

        this.state = {
            color: "darkgray",
            // color: props.tokenColor
            collected: false
        }
    }

    chipColorFlipped = () => {
        let newState = !this.state.collected
        this.setState({collected: newState})
        if(newState){
            this.setState({color: this.props.categoryColor})
        }
        else
        {
            this.setState({color: "darkgray"})
        }
        // if (this.state.color === this.props.tokenColor) {
        //     this.setState({color: this.props.categoryColor})
        // }
        // else {
        //     this.setState({color: this.props.tokenColor})
        // }
    }

	setAvailability() {
		this.isTaken = true;
	}

	render() {
        return  (<Rect
                        onDblClick={() => this.chipColorFlipped()}
                        x={this.props.x}
                        y={this.props.y}
                        width={20}
                        height={20}
                        fill={this.state.color}
                        stroke="lightslategray"
                    />);
    }

}
