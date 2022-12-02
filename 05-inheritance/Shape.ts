export class Shape{

    constructor(private _x:number, private _y: number){
    }

    get x() {
      return this._x
    }
    
    set x(val: number) {
      this._x = val
    }
    
    get y() {
      return this._y
    }
    
    set y(val: number) {
      this._y = val
    }

    getInfo():string{
        return `x=${this._x}, y=${this._y}`;
    }


    
}