class Category {
    constructor(color, name) {
        this.categoryColor = color;
        this.categoryName = name;
    }

    updateCategoryColor = (color) => {
        this.categoryColor = color;
    }

    updateCategoryName = (name) => {
        this.categoryName = name;
    }

    getColor = () => {
        return this.categoryColor;
    }

    getName = () => {
        return this.categoryName;
    }

}