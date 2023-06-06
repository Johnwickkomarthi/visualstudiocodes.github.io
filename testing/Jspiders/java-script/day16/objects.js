//objects can be created in two ways. 1) Object literals 2)Constructor
//-------------states of the object--------- 
let myCar = {
    name: "Fiat",
    model: "VXI",
    color: "red",
    numberOfGears: 5,
    currentGear: 3,
    currentSpeed: 45,
    //-------------Behaviour of the object--------- 
    accelerate: function (speedCounter) {
        this.currentSpeed = this.currentSpeed + speedCounter;
        return this.currentSpeed;
    },
     
    brake: function (speedCounter) {
        this.currentSpeed = this.currentSpeed - speedCounter;
        return this.currentSpeed;
    }
}
console.log(myCar);

//below is the older way to create objects
let name = "Arnold";
let age = 65;
let country = "USA";
let obj = {
    name: name,
    age: age,
    country: country
};

//Below is the modern way to create objects in a simpler way:
let name1="Arnold";
let age1=65;
let country1="USA";
let obj1={name1,age1,country1};

//Literal property without shorthand 
function createCourse(name, status) {
    return {type: "JavaScript", name: name, status: status};
}
function reviewCourse(name) {
    return {type: "JavaScript", name: name};
}
/*Literal property with shorthand 
when the property and the value identifiers have the same name,  
the identifier can be omitted to make it implicit*/
function createCourse(name, status) {
    return {type: "JavaScript", name, status};
}
function reviewCourse(name) {
    return {type: "JavaScript", name};
}

// Earlier in JavaScript to add a dynamic property to an existing object, below syntax was used. 
let personalDetails = {
    name: "Stian Kirkeberg",
    country: "Norway"    
};
let dynamicProperty = "age";
personalDetails[dynamicProperty] = 45;
console.log(personalDetails.age); //Output: 45 

// With newer updates in JavaScript after 2015 the dynamic properties can be conveniently added using hash notation and the values are computed to form a key-value pair.
let dynamicProperty1 = "age";
let personalDetails = {
    name: "Stian Kirkeberg",
    country: "Norway",
    [dynamicProperty1]: 45
};
console.log(personalDetails.age); //Output: 45 

// To construct multiple objects with the same set of properties and methods, function constructor can be used. Function constructor is like regular functions but it is invoked using a 'new' keyword. 
function Car(name, model, color, numberOfGears, currentSpeed, currentGear) {
    //-------------States of the object--------- 
    this.name=name;
    this.model=model;
    this.color=color;
    this.numberOfGears = numberOfGears;
    this.currentSpeed = currentSpeed;
    this.currentGear = currentGear;
    //-------------Behaviour of the object--------- 
    this.accelerate = function (speedCounter) {
        this.currentSpeed = this.currentSpeed + speedCounter;
        return this.currentSpeed;
    }
    this.brake = function (speedCounter) {
        this.currentSpeed = this.currentSpeed - speedCounter;
        return this.currentSpeed;
    }
}
/*
this' keyword that is used in this case is a JavaScript pointer. It points to an object which owns the code in the current context. 
It does not have any value of its own but is only the substitute for the object reference wherever it is used. 

Example:
If used inside an object definition, it points to that object itself. If used inside the function definition, it points to the object that owns the function. 
To create objects using function constructor, make use of 'new' keyword, and invoke the function. This initializes a variable of type object. The properties and methods of the object can be invoked using the dot or bracket operator.
*/
//Retrieving state using the dot operator: 
myCar.name;//return "Fiat" 
myCar.currentSpeed;//returns 45 

// Retrieving behavior using the dot operator: 
myCar.accelerate(50);//invokes accelerate() with argument = 50 

// Retrieving state using the bracket operator:
myCar["name"];//return "Fiat" 
myCar["currentSpeed"];//returns 45 

// Retrieving behavior using the bracket operator: 
myCar["accelerate"](50);//invokes accelerate() with argument = 50 

// combining and cloning objects using spread operator
    // The spread operator is used to combine two or more objects. The newly created object will hold all the properties of the merged objects. 
    let candidateSelected={
    	Name:'Rexha Bebe',
    	Qualification:'Graduation',
    };
    let SelectedAs={
    	jobTitle:'System Engineer',
    	location:'Bangalore'
    };
    let employeeInfo={
    	...candidateSelected,
    	...SelectedAs
    };
    console.log(employeeInfo);
    /*
    {
      Name: 'Rexha Bebe',
      Qualification: 'Graduation',
      jobTitle: 'System Engineer',
      location: 'Bangalore'
    } 
    */

    //    It is possible to get a copy of an existing object with the help of the spread operator. 

    let originalObj = { one: 1, two: 2, three: 3 };
    let clonedObj = { ...originalObj };
    /*
    Here spreading the object into a list of parameters happens 
    which return the result as a new object 
    checking whether the objects hold the same contents or not 
    */
    alert(JSON.stringify(originalObj) === JSON.stringify(clonedObj));// true 
    //checking whether both the objects are equal 
    alert(originalObj === clonedObj);   // false (not same reference) 
    //to show that modifying the original object does not alter the copy made 
    originalObj.four = 4;
    alert(JSON.stringify(originalObj)); // {"one":1,"two":2,"three":3,"four":4} 
    alert(JSON.stringify(clonedObj));   // {"one":1,"two":2,"three":3} 

//Destructuring the objects
    /* 
    Destructuring gives a syntax that makes it easy to create objects based on variables. 
    It also helps to extract data from an object. Destructuring works even with the rest and spread operators. 
    In the below example an object is destructured into individual variables:
    */
    let myObject = { names: 'Arnold', age: 65, country: 'USA' };
    let { names, age:currentAge } = myObject; //alias can be used with : 
    console.log(names);
    console.log(currentAge);
    //OUTPUT: Arnold 65 
    // An alias currentAge is used for age

    //an objectt destructuring using functions
    let myObject1 = { name:'Marty', age: 65,country:'California'};
    function showDetails({country}){
        console.log(country);
    }
    showDetails(myObject1);//invoke the function using the object 
    //OUTPUT: California 

/* NOTE:- we can access the object properties using '.' operator or '[]' bracket operator.
          objectName.key=value;
          or
          objectName["key"]=value;
          we can also call methods by using brackets
          objectName["key"](actual parameter);
*/

// Accessing the object properties using for in loop
let user = {
        name: "Rexha",
        age: 24,
        isConfirmed: true
    };
    for (let key in user) {
        // keys 
        console.log(key);  // name, age, isConfirmed 
        // values for the keys 
        console.log(user[key]); // Rexha, 24, true 
    }
    




