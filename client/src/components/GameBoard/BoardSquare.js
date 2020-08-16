import React, {Component} from 'react';
import { Rect, Circle, Group, Text } from 'react-konva';

class BoardSquare extends Component {

    constructor(props) {
        super(props)
    }


    getSquareFunction = () => {
        return this.props.squareFunction
    }

    getBoardSquare = () => {
        if (this.getSquareFunction() === "center hub") {
            return (
                <Group>
                    <Rect
                        x={this.props.x}
                        y={this.props.y}
                        width={25}
                        height={25}
                        fill={this.props.category[0] === undefined ? "white" : this.props.category[0].getColor() }
                    />
                    <Rect
                        x={this.props.x}
                        y={this.props.y + 25}
                        width={25}
                        height={25}
                        fill={this.props.category[1] === undefined ? "white" : this.props.category[1].getColor() }
                    />
                    <Rect
                        x={this.props.x + 25}
                        y={this.props.y}
                        width={25}
                        height={25}
                        fill={this.props.category[2] === undefined ? "white" : this.props.category[2].getColor() }
                    />
                    <Rect
                        x={this.props.x + 25}
                        y={this.props.y + 25}
                        width={25}
                        height={25}
                        fill={this.props.category[3] === undefined ? "white" : this.props.category[3].getColor() }
                    />
                </Group>
            )
        }
        else if (this.getSquareFunction() === "roll again") {
            return (
                <Group>
                    <Rect
                        x={this.props.x}
                        y={this.props.y}
                        width={50}
                        height={50}
                        fill="grey"
                        stroke="black"
                    />
                    <Text x={this.props.x + 2} y={this.props.y + 20} text="Roll Again" fontSize={10} />
                </Group>
            )
        }
        else if (this.getSquareFunction() === "headquarter") {
            return (
                <Group>
                    <Rect
                        x={this.props.x}
                        y={this.props.y}
                        width={50}
                        height={50}
                        fill="grey"
                        stroke="black"
                    />
                    <Circle x={this.props.x + 25} y={this.props.y + 25} radius={25} fill={this.props.category === undefined ? "grey" : this.props.category.getColor() } />
                </Group>
            )
        }
        else {
            return (<Rect
                x={this.props.x}
                y={this.props.y}
                width={50}
                height={50}
                fill={this.props.category === undefined ? "white" : this.props.category.getColor() }
                stroke="black"
            />)
        }
    }


    render() {
        return this.getBoardSquare()
    }


}

export default BoardSquare
