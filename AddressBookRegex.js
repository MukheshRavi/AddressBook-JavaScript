// Create a contact class
class AddressBook
{
    // Creating parametrized constructor
    constructor(...params)
    {
        this.firstName= params[0];
        this.lastName= params[1];
        this.address= params[2];
        this.city= params[3];
        this.state= params[4];
        this.zip= params[5];
        this.phoneNumber= params[6];
        this.email= params[7];
    }
    
    // defining method toString()
    toString()
    {
        return "first Name: "+this.firstName+", last Name: "+this.lastName+"\nAddress: "+ this.address+", City: "+ this.city+", State: "+this.state+"\nZip: "+this.zip+", Phone Number: "+this.phoneNumber+", email: "+this.email; 
    }
    
}

// Creating object for class Address book with parameters for constructor
let contact= new AddressBook("Mukhesh","Attuluri","Vemakotavari street","ParvathiPuram","Ap","535501","8978496720","mkh@gmail.com");
console.log(contact.toString());