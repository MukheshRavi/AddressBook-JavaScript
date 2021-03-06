// Create a contact class
class AddressBook
{
    // Creating parametrized constructor
    constructor(...params)
    {
        if(!CheckDuplicates(params[0],params[1]))
        {
            console.log("Contact already exists");
            return;
        }
        this.firstName= params[0];
        this.lastName= params[1];
        this.address= params[2];
        this.city= params[3];
        this.state= params[4];
        this.zip= params[5];
        this.phoneNumber= params[6];
        this.email= params[7];
    }
    // getter and setter for first name
    get firstName(){return this._firstName;}
    set firstName(firstName)
    {
        let nameRegex = RegExp("^[A-Z][A-Za-z]{2,}$");
        if(nameRegex.test(firstName))
            this._firstName= firstName;
        else
        throw "Invalid FirstName format";
    }

    // getter and setter for last name
    get lastName(){return this._lastName;}
    set lastName(lastName)
    {
        let nameRegex = RegExp("^[A-Z][A-Za-z]{2,}$");
        if(nameRegex.test(lastName))
            this._lastName= lastName;
        else
        throw "Invalid LastName format";
        
    }

    // getter and setter for address
    get address(){return this._address;}
    set address(address)
    {
        let addressRegex = RegExp("^[A-Za-z]{4,}");
        if(addressRegex.test(address))
            this._address= address;
        else
        throw "Invalid address format";
    }

    // getter and setter for city
    get city(){return this._city;}
    set city(city)
    {
        let cityRegex = RegExp("^[A-Za-z]{4,}$");
        if(cityRegex.test(city))
            this._city= city;
        else
        throw "Invalid city format";
    }

    // getter and setter for state
    get state(){return this._state;}
    set state(state)
    {
        let stateRegex = RegExp("^[A-Za-z]{4,}$");
        if(stateRegex.test(state))
            this._state= state;
        else
        throw "Invalid state format";
    }

    // getter and setter for zip
    get zip(){return this._zip;}
    set zip(zip)
    {
        let zipRegex = RegExp("^[0-9]{3}[ ]?[0-9]{3}$");
        if(zipRegex.test(zip))
            this._zip= zip;
        else
        throw "Invalid zip format";
    }

    // getter and setter for phoneNumber
    get phoneNumber(){return this._phoneNumber;}
    set phoneNumber(phoneNumber)
    {
        let phoneRegex = RegExp("^([0-9]{2})?[0-9]{10}$");
        if(phoneRegex.test(phoneNumber))
            this._phoneNumber= phoneNumber;
        else
        throw "Invalid Phone Number format";
    }

    // getter and setter for email
    get email(){return this._email;}
    set email(email)
    {
        let emailRegex = RegExp("^[a-zA-Z]{3,}([.+_-][0-9A-Za-z]+)*[@][0-9a-zA-Z]{1,}[.][a-zA-Z0-9]{2,3}([.][0-9a-zA-Z]{2})?");
        if(emailRegex.test(email))
            this._email= email;
        else
        throw "Invalid email";
    }
    
    // defining method toString()
    toString()
    {
        return "first Name: "+this.firstName+", last Name: "+this.lastName+"\nAddress: "+ this.address+", City: "+ this.city+", State: "+this.state+"\nZip: "+this.zip+", Phone Number: "+this.phoneNumber+", email: "+this.email; 
    }
    
}

// Creating object for class Address book with parameters for constructor
let contactsArray=[];
try{
let contact= new AddressBook("Mukhesh","Attuluri","Vemakotavari street","ParvathiPuram","AndhraPradesh","535501","8978496720","mkh@gmail.com");
console.log(contact.toString());
//UC3 
//Create AddressBook Array
contactsArray.push(contact);
contactsArray.push(new AddressBook("Ravi","Attuluri","Star nagar","Karimnagar","Telangana","123213","7996541252","Ravi@gmail.com"));
contactsArray.push(new AddressBook("Prasad","Rao","Jaya nagar","Nellore","Andhrapradesh","486213","9490476083","prasad@gmail.com"));
contactsArray.push(new AddressBook("Ram","Kumar","Gandhi street","Warangal","Telangana","789632","9600577672","ram@gmail.com"));
console.log(contactsArray);
}
catch(e)
{
    console.log(e);
}
//UC4
// Edit existing contact
let editContact = contactsArray.filter(p => p.firstName == "Mukhesh" && p.lastName == "Attuluri")[0];
editContact.email = "mukesh@gmail.com";
console.log(editContact);
console.log(contactsArray);
// UC 5 Delete existing contact
searchedContact = contactsArray.filter(p => p.firstName == "Ram" && p.lastName == "Kumar")[0];
var index = contactsArray.indexOf(searchedContact);
if (index != -1)
  contactsArray.splice(index, 1);
console.log(contactsArray);
// UC 6 Count number of contacts
let count = contactsArray.reduce(((count,contact) => {count+=1;
    return count;}),0);
console.log(count);
// UC 7 Check For Duplicates
function CheckDuplicates(FirstName,LastName)
{
    searchedContact = contactsArray.filter(p => p.firstName == FirstName && p.lastName == LastName)[0];
    var index = contactsArray.indexOf(searchedContact);
    if(index=-1)
    return true;
}
contactsArray.push(new AddressBook("Prasad","Rao","Jaya nagar","Nellore","Andhrapradesh","486213","9490476083","prasad@gmail.com"));
// UC 8
//UC 9
// Search Person In city
function SearchContactInCity(City)
{
    let cityArray = contactsArray.filter(p =>p.city == City);
    console.log("Searched contacts in city "+ City);
    console.log(cityArray);
}
SearchContactInCity("ParvathiPuram");
//uC 10
//Count by city or state
function CountContactInCity(City)
{
    let cityArray = contactsArray.filter(p =>p.city == City);
    let count=cityArray.reduce(((count,contact) => {count+=1;
        return count;}),0);
    console.log(count);
}
CountContactInCity("ParvathiPuram");
// UC 11 Sort by person name
function SortByPersonName()
{
    let sortedArray = contactsArray;
    sortedArray.sort((a,b) => a.firstName.toLowerCase().localeCompare(b.firstName.toLowerCase()));
    console.log("\n\nPrinting sorted array by person name : ");
    sortedArray.forEach(p => console.log("\n"+p.toString()));
}
SortByPersonName();
//UC 12
// Sort by city
function SortByCity()
{
    let sortedArray = contactsArray;
    sortedArray.sort((a,b) => a.city.toLowerCase().localeCompare(b.city.toLowerCase()));
    console.log("\n\nPrinting sorted array by city : ");
    sortedArray.forEach(p => console.log("\n"+p.toString()));
}
SortByCity();
// Sort by zip
function SortByZip()
{
    let sortedArray = contactsArray;
    sortedArray.sort((a,b) => a.zip.toLowerCase().localeCompare(b.zip.toLowerCase()));
    console.log("\n\nPrinting sorted array byzip : ");
    sortedArray.forEach(p => console.log("\n"+p.toString()));
}
SortByZip();
// Sort by person name
function SortByState()
{
    let sortedArray = contactsArray;
    sortedArray.sort((a,b) => a.state.toLowerCase().localeCompare(b.state.toLowerCase()));
    console.log("\n\nPrinting sorted array by State : ");
    sortedArray.forEach(p => console.log("\n"+p.toString()));
}
SortByState();