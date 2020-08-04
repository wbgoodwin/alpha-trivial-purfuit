import React, {Component} from 'react';
import { Rect } from 'react-konva';

class BoardSquare extends Component {

    constructor(props) {
        super(props)
    }


    getSquareFunction = () => {
        return this.props.squareFunction
    }

    render() {
        return <Rect
            x={this.props.x}
            y={this.props.y}
            width={100}
            height={100}
            fill={this.props.category}
        />
    }


}

export default BoardSquare