//let and string templates
let greeting = "hi";
console.log(` ${greeting} craig`);

//arrow functions
var values= [6,1,3,7,2,4,5];
var result = values.sort((a, b) => a - b);
console.log(result);


var values= [{name:'Zoro'},{name:'Spiderman'}, {name:'Heathcliff'},{}];
var result = values.sort((a, b) => a.name > b.name);
console.log(result)




class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name(newName) {
        this._name = newName;   // validation could be checked here such as only allowing non numerical values
    }

    walk() {
        console.log(this._name + ' is walking.');
    }
}

let bob = new Person('Bob');
console.log(bob.name);  // Outputs 'BOB'


///////////////////////////////
class Person {
    constructor(name) {
        this.name = name;
    }
}

let bob = new Person('Bob');
console.log(bob.name);  // Outputs 'Bob'