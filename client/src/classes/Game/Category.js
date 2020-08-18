import { colorMapping } from '../../colors'

export default class Category {
  constructor(id, color, name) {
    this.categoryId = id;
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
    return this.categoryId;
  }

  getColor = () => {
    return this.categoryColor;
  }

  getColorName = () => {
    for (let c in colorMapping) {
      if (colorMapping[c] === this.categoryColor.toUpperCase()) {
        return c
      }
    }
  }

  getName = () => {
    return this.categoryName;
  }
}
