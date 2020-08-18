
class BoardSquareNode {
    constructor(left, right, top, bottom, x, y) {
        this.left = left;
        this.right = right;
        this.top = top;
        this.bottom = bottom;
        this.x = x;
        this.y = y;
    }

    hasLeft = () => {
        return this.left !== null && this.left !== undefined;
    }

    hasRight = () => {
        return this.right !== null && this.right !== undefined;
    }

    hasTop = () => {
        return this.top !== null && this.top !== undefined;
    }

    hasBottom = () => {
        return this.bottom !== null && this.bottom !== undefined;
    }

}

export default BoardSquareNode;