import { Shape } from './Shape';

export class Rectangle extends Shape{
 
  calculateArea(): number {
    return this._lengh*this._width;
  }

   constructor(theX:number, theY: number, private _width:number, private _lengh:number){
    super(theX, theY);
   }

    public get width() {
      return this.width
    }
    
    public set width(val: number) {
      this.width = val
    }
    
    public get length() {
      return this.length
    }
    
    public set length(val: number) {
      this.length = val
    }

    public getInfo(): string{
        return super.getInfo() + `, width= ${this._width}, lengh=${this._lengh}`;
    }

}

