"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(theX, theY, _width, _lengh) {
        super(theX, theY);
        this._width = _width;
        this._lengh = _lengh;
    }
    calculateArea() {
        return this._lengh * this._width;
    }
    get width() {
        return this.width;
    }
    set width(val) {
        this.width = val;
    }
    get length() {
        return this.length;
    }
    set length(val) {
        this.length = val;
    }
    getInfo() {
        return super.getInfo() + `, width= ${this._width}, lengh=${this._lengh}`;
    }
}
exports.Rectangle = Rectangle;
