import React, {Component} from 'react';
import { Rect, Circle, Group, Text } from 'react-konva';

class BoardSquare extends Component {

    constructor(props) {
        super(props)
        this.tokensOnSqaure = 0;
        this.width = 100;
    }


    getSquareFunction = () => {
        return this.props.squareFunction
    }

    moveTokenOnClick = () => {
        this.tokensOnSqaure++;
        switch(this.tokensOnSqaure % 4) {
            case 1:
                this.props.gameController.updateTokenLocation(this.props.x, this.props.y);
              break;
            case 2:
                this.props.gameController.updateTokenLocation(this.props.x + this.width/2, this.props.y);
              break;
            case 3:
                this.props.gameController.updateTokenLocation(this.props.x, this.props.y + this.width/2);
              break;
            case 0:
                this.props.gameController.updateTokenLocation(this.props.x + this.width/2, this.props.y + this.width/2);
              break;
            default:
                this.props.gameController.updateTokenLocation(this.props.x, this.props.y);
          }

    }


    getBoardSquare = () => {
        if (this.getSquareFunction() === "center hub") {
            return (
                <Group onClick={() => this.moveTokenOnClick()}>
                    <Rect
                        x={this.props.x}
                        y={this.props.y}
                        width={this.width/2}
                        height={this.width/2}
                        fill={this.props.category[0] === undefined ? "white" : this.props.category[0].getColor() }
                    />
                    <Rect
                        x={this.props.x}
                        y={this.props.y + this.width/2}
                        width={this.width/2}
                        height={this.width/2}
                        fill={this.props.category[1] === undefined ? "white" : this.props.category[1].getColor() }
                    />
                    <Rect
                        x={this.props.x + this.width/2}
                        y={this.props.y}
                        width={this.width/2}
                        height={this.width/2}
                        fill={this.props.category[2] === undefined ? "white" : this.props.category[2].getColor() }
                    />
                    <Rect
                        x={this.props.x + this.width/2}
                        y={this.props.y + this.width/2}
                        width={this.width/2}
                        height={this.width/2}
                        fill={this.props.category[3] === undefined ? "white" : this.props.category[3].getColor() }
                    />
                </Group>
            )
        }
        else if (this.getSquareFunction() === "roll again") {
            return (
                <Group onClick={() => this.moveTokenOnClick()}>
                    <Rect
                        x={this.props.x}
                        y={this.props.y}
                        width={this.width}
                        height={this.width}
                        fill="grey"
                        stroke="black"
                    />
                    <Text x={this.props.x + 2} y={this.props.y + 20} text="Roll Again" fontSize={10} />
                </Group>
            )
        }
        else if (this.getSquareFunction() === "headquarter") {
            return (
                <Group onClick={() => this.moveTokenOnClick()}>
                    <Rect
                        x={this.props.x}
                        y={this.props.y}
                        width={this.width}
                        height={this.width}
                        fill="grey"
                        stroke="black"
                    />
                    <Circle x={this.props.x + this.width/2} y={this.props.y + this.width/2} radius={this.width/2} fill={this.props.category === undefined ? "grey" : this.props.category.getColor() } />
                </Group>
            )
        }
        else {
            return (<Rect
                x={this.props.x}
                y={this.props.y}
                width={this.width}
                height={this.width}
                fill={this.props.category === undefined ? "white" : this.props.category.getColor() }
                stroke="black"
                onClick={() => this.moveTokenOnClick()}
            />)
        }
    }


    render() {
        return this.getBoardSquare()
    }


}

export default BoardSquare
