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
                        width={50}
                        height={50}
                        fill={this.props.category[0] === undefined ? "white" : this.props.category[0].getColor() }
                    />
                    <Rect
                        x={this.props.x}
                        y={this.props.y + 50}
                        width={50}
                        height={50}
                        fill={this.props.category[1] === undefined ? "white" : this.props.category[1].getColor() }
                    />
                    <Rect
                        x={this.props.x + 50}
                        y={this.props.y}
                        width={50}
                        height={50}
                        fill={this.props.category[2] === undefined ? "white" : this.props.category[2].getColor() }
                    />
                    <Rect
                        x={this.props.x + 50}
                        y={this.props.y + 50}
                        width={50}
                        height={50}
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
                        width={100}
                        height={100}
                        fill="grey"
                        stroke="black"
                    />
                    <Text x={this.props.x + 15} y={this.props.y + 45} text="Roll Again" fontSize={15} />                
                </Group>
            )
        }
        else if (this.getSquareFunction() === "headquarter") {
            return (
                <Group>
                    <Rect
                        x={this.props.x}
                        y={this.props.y}
                        width={100}
                        height={100}
                        fill="grey"
                        stroke="black"
                    />
                    <Circle x={this.props.x + 50} y={this.props.y + 50} radius={50} fill={this.props.category === undefined ? "grey" : this.props.category.getColor() } />
                </Group>
            )
        }
        else {
            return (<Rect
                x={this.props.x}
                y={this.props.y}
                width={100}
                height={100}
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