import {Shape} from './Shape'

export class Circle extends Shape{

    constructor(theX:number, theY:number, private _radius:number ){
        super(theX, theY);
    }

    public get radius() {
    return this._radius
    }

    public set radius(val: number) {
    this._radius = val
    }
    
    public getInfo(): string{
        return super.getInfo() + `, radius= ${this._radius}`;
    }

}