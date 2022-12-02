export class Customer {


  constructor(private _firstName : string, private _lastName:string){
}
    
    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value : string){
        this._firstName = value;
    }
   
    get lastName() {
      return this._lastName
    }
    
    set lastName(val: string) {
      this._lastName = val
    }

}




