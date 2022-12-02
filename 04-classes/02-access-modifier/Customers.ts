class Customer {


    private _firstName: string;
    private _lastName: string;
    
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

    constructor(theFirst: string, theLast:string){
        this._firstName=theFirst;
        this._lastName=theLast;
    }

}


// Let's create an instance

let myCustomer = new Customer("Martin", "Dixon");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

