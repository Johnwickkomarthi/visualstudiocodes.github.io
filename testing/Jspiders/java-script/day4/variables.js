"use strict"//if we don't decleare any variable type for the identifiers then we should use this method name
//a=10
//console.log(a);




//scope of variables
var a1=10//global scope its present inside the window object
console.log(a1);
console.log(window);

let b=20;
console.log(b);// local scope

const c=30;
console.log(c);// local scope



//DECLERATION

var a2;
console.log(a2);// var canbe delcleared without initilisation

let b2
console.log(b2);// let an also be decleaed without initilisation

//const c2; we cant decleare the const, there only we have to initilise
const c33=30;
console.log(c33);





// REDECLEARATION AND RE-INITILISATION

var a4=22;
console.log(a4);
var a4='ji hind';
console.log(a4);// var can be redecleared and re-initilised

let b3='ok';
console.log(b3);
b3=30;//we can beinitilise the let variable
console.log(b3);
//let b3=40;this is will give error, bcz we can't be re-decler let again.
const c5='can';
console.log(c5);
//const c5=55;this is will give error, bcz we can't be re-declered and re-initilise the const variable



