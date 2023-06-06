class Calculator {
	constructor(num1, num2){  // Constructor used for initializing the class instance
	
		/* Properties initialized in the constructor */
		this.num1 = num1;
		this.num2 = num2;
	}
	/* Methods of the class used for performing operations */
	add() {
		return this.num1 + this.num2;
	}
	subtract() {
		return this.num1 - this.num2;
	}
}
let calculator = new Calculator(300, 100); // Creating Calculator class object or instance
console.log("Add method returns" + calculator.add()); // Add method returns 400. 
console.log("Subtract method returns" + calculator.subtract()); // Subtract method returns 200. 


//static methods
    /*
    Static methods can be created in JavaScript using the static keyword like in other programming languages. Static values can be accessed only using the class name and not using 'this' keyword. Else it will lead to an error.
    */
class Calculator {
    constructor(num1, num2) {  // Constructor used for initializing the class instance
        /* Properties initialized in the constructor */
        this.num1 = num1;
        this.num2 = num2;
    }
    /* static method */
    static display() {
        console.log("This is a calculator app");
    }
    /* Methods of the class used for performing operations */
    add() {
        return this.num1 + this.num2;
    }
    subtract() {
        return this.num1 - this.num2;
    }
}
/*static method display() is invoked using class name directly. */
Calculator.display(); 


//inheritance
    /*
    In JavaScript, one class can inherit another class using the extends keyword. The subclass inherits all the methods ( both static and non-static ) of the parent class.
    Inheritance enables the reusability and extensibility of a given class.
    JavaScript uses prototypal inheritance which is quite complex and unreadable. But, now you have 'extends' keyword which makes it easy to inherit the existing classes.
    Keyword super can be used to refer to base class methods/constructors from a subclass
    */
    class Vehicle {
        constructor(make, model) {
            /* Base class Vehicle with constructor initializing two-member attributes */
            this.make = make;
            this.model = model;
        }
    }
    class Car extends Vehicle {
        constructor(make, model, regNo, fuelType) {
            super(make, model); // Sub class calling Base class Constructor 
            this.regNo = regNo;
            this.fuelType = fuelType;
        }
        getDetails() {
            /* Template literals used for displaying details of Car. */
            console.log(`${this.make},${this.model},${this.regNo},${this.fuelType}`);
        }
    }
    let c = new Car("Hundai", "i10", "KA-016447", "Petrol"); // Creating a Car object 
    c.getDetails(); 
    

//Subclassing Built-ins

    /*
    The keywords, class and extends, help developers to create classes and implement inheritance in the application where user-defined classes can be created and extended. Similarly, the built-in classes can be subclassed to add more functionality.
    */
    class MyArray extends Array {
        constructor(...args) {
            super(...args);
        }
        display() {
            let strItems = "";
            for (let val of this) {
                strItems += `${val} `;
            }
            console.log(strItems);
        }
    }
    let letters = new MyArray("Sam", "Jack", "Tom");
    letters.display(); 
    