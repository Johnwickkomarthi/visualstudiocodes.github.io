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





