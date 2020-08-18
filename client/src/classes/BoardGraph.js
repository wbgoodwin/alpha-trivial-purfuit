import BoardSqaureNode from './BoardSquareNode';

class BoardGraph {
    constructor(){
        this.graph = this.initializeGraph();
    }

    getGraph = () => {
        return this.graph;
    }

    initializeGraph = () => {
        let map = new Map();
        this.initializeNodes(map);
        this.associateNodes(map);
        return map;
    }

    initializeNodes = (map) => {
        let negativeI, negativeJ;
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j = j + 4) {
                negativeI = this.getNegative(i);
                negativeJ = this.getNegative(j);
                if (!this.mapHasObjectCopy(map, {x: i, y : j})) {
                    map.set({x: i, y : j}, new BoardSqaureNode());                
                }
                if (!this.mapHasObjectCopy(map, {x: j, y : i})) {
                    map.set({x: j, y : i}, new BoardSqaureNode());                
                }
                if (!this.mapHasObjectCopy(map, {x: negativeI, y : negativeJ})) {
                    map.set({x: negativeI, y : negativeJ}, new BoardSqaureNode());                
                }
                if (!this.mapHasObjectCopy(map, {x: negativeJ, y : negativeI})) {
                    map.set({x: negativeJ, y : negativeI}, new BoardSqaureNode());                
                }
                if (!this.mapHasObjectCopy(map, {x: negativeI, y : j})) {
                    map.set({x: negativeI, y : j}, new BoardSqaureNode());                
                }
                if (!this.mapHasObjectCopy(map, {x: negativeJ, y : i})) {
                    map.set({x: negativeJ, y : i}, new BoardSqaureNode());                
                }
                if (!this.mapHasObjectCopy(map, {x: i, y : negativeJ})) {
                    map.set({x: i, y : negativeJ}, new BoardSqaureNode());                
                }
                if (!this.mapHasObjectCopy(map, {x: j, y : negativeI})) {
                    map.set({x: j, y : negativeI}, new BoardSqaureNode());                
                }

            }
        }
    }

    associateNodes = (map) => {
        for (const [key, value] of map) {
            value.top = this.findTop(key, map);
            value.bottom = this.findBottom(key, map);
            value.left = this.findLeft(key, map);
            value.right = this.findRight(key, map);
            value.x = key.x;
            value.y = key.y;
        }
    }

    mapHasObjectCopy = (map, object) => {
        for (const [key, value] of map) {
            if (key.x == object.x && key.y == object.y) {
                return true;
            }
        }
        return false;
    }

    findObjectInMap = (map, object) => {
        for (const [key, value] of map) {
            if (key.x == object.x && key.y == object.y) {
                return value;
            }
        }
    }

    /**
     * Needed because 0 and -0 are not the same in the map
     * @param {*} i 
     */
    getNegative = (i) => {
        if (i == 0){
            return 0;
        }
        return -i;
    }

    findTop = (key, map) => {
        return this.findObjectInMap(map, {x: key.x, y: key.y - 1});
    }

    findBottom = (key, map) => {
        return this.findObjectInMap(map, {x: key.x, y: key.y + 1});
    }

    findLeft = (key, map) => {
        return this.findObjectInMap(map, {x: key.x - 1, y: key.y});
    }

    findRight = (key, map) => {
        return this.findObjectInMap(map, {x: key.x + 1, y: key.y});
    }
}

export default BoardGraph;