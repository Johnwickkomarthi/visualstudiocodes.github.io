//funtional deceleration statement
console.log(demo);//this is also hoisting
console.log(demo());// this hoisting a fun. it will call the function
function demo(){
    return "era ela vunnav";
    
}
// console.log(demo);
// console.log(demo());



// console.log(add());
function add(){
    let a=Number(prompt('enter a value'));
    let b=Number(prompt('enter a value'));
    return a+b;
}

//higher order function

function operation (a,b, task){
    let c=task(a,b);
    return c;
}
let a=Number(prompt('enter a vlaue for addition'));
let b=Number(prompt('enter b vlaue for addition'));

let addition=operation(a,b,function (a,b){
    return a+b;
})

console.log(addition);

let a1=Number(prompt('enter a1 vlaue for substraction'));
let b1=Number(prompt('enter b1 vlaue for substraction'));

let substraction=operation(a1,b1,function (a,b){
    return a-b;
})

console.log(substraction);
let a2=Number(prompt('enter a2 vlaue for multiplication'));
let b2=Number(prompt('enter b2 vlaue for multiplication'));
let multiplication=operation(a2,b2,function (a,b){
    return a*b;
})

console.log(multiplication);

let a3=Number(prompt('enter a3 vlaue for division'));
let b3=Number(prompt('enter b3 vlaue for division'));
let division=operation(a3,b3,function (a,b){
    return a/b;
})

console.log(division);




//NOTES FROM INFOSYS SPRINGBOARD
    /*
    Function parameters are the variables that are defined in the function definition and the values passed to the function when it is invoked are called arguments.

    In JavaScript, function definition does not have any data type specified for the parameters, and type checking is not performed on the arguments passed to the function.

    JavaScript does not throw any error if the number of arguments passed during a function invocation doesn’t match with the number of parameters listed during the function definition. If the number of parameters is more than the number of arguments, then the parameters that have no corresponding arguments are set to undefined.
    */
        function multiply(num1, num2) {
        	if (num2 == undefined) {
        		num2 = 1;
        	}
        	return num1 * num2;
        }
        console.log(multiply(5, 6)); // 30
        console.log(multiply(5)); // 5


    //JavaScript introduces an option to assign default values in functions.
        function multiply(num1, num2 = 1) {
            return num1 * num2;
        }
        console.log(multiply(5, 5)); //25
        console.log(multiply(10)); //10
        console.log(multiply(10, undefined)); //10




    //Rest parameters

        // Rest parameter syntax allows to hold an indefinite number of arguments in the form of an array.


        // The rest of the parameters can be included in the function definition by using three dots ( … ) followed by the name of the array that will hold them. 
        function showNumbers(x, y,...z) {
            return z;
        }
        console.log(showNumbers(1, 2, 3, 4, 5)); // [3,4,5]
        console.log(showNumbers(3, 4, 5, 6, 7, 8, 9, 10)); // [5,6,7,8,9,10]


    // Destructuring assignments

        // Destructuring gives a syntax which makes it easy to unpack values from arrays, or properties from objects, into different variables.
        
        // Array destructuring in functions
        let myArray = ["Andrew", "James", "Chris"];
        function showDetails([arg1, arg2]) {
        	console.log(arg1); // Andrew
        	console.log(arg2); // James
        }
        showDetails(myArray);

        // Object destructuring in functions
        let myObject = { name: "Mark", age: 25, country: "India" };
        function showDetails({ name, country }) {
        	console.log(name, country); // Mark India
        }
        showDetails(myObject);
    //Nested functions
        function giveMessage(message) {
            let userMsg = message;
            function toUser(userName) {
                let name = userName;
                let greet = userMsg + " " + name;
                return greet;
            }
            userMsg = toUser("Bob");
            return userMsg;
        }
        console.log(giveMessage("The world says hello dear: "));
        // The world says hello dear: Bob

    //In-built functions
        //pareseInt()
            // parseInt() does not handle BigInt values. It stops at the n character, and treats the preceding string as a normal integer, with possible loss of precision.
            parseInt("900719925474099267n");//900719925474099267
            // You should pass the string to the BigInt() function instead, without the trailing n character.
            BigInt("900719925474099267");//900719925474099267

            //parseInt doesn't work with numeric separators:
            parseInt("123_456"); // 123


            // parseInt() can have interesting results when working on non-strings combined with a high radix; for example, 36 (which makes all alphanumeric characters valid numeric digits).
            parseInt(null, 36); // 1112745: The string "null" is 1112745 in base 36
            parseInt(undefined, 36); // 86464843759093: The string "undefined" is 86464843759093 in base 36

