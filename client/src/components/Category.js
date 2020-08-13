export default class Category {
    constructor(id, color, name) {
      this.id = id
      this.categoryColor = color;
      this.categoryName = name;
    }

    updateCategoryColor = (color) => {
        this.categoryColor = color;
    }

    updateCategoryName = (name) => {
        this.categoryName = name;
    }

    getId = () => {
      return this.id
    }

    getColor = () => {
        return this.categoryColor;
    }

    getName = () => {
        return this.categoryName;
    }

}
