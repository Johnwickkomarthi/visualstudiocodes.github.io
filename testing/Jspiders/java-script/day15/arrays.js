
//creating array in literal way
let array1=[10,'hello',true,undefined,null];
console.log(array1);

//creating array using new keyword

let arr1=new Array(10,20,'hello');
console.log(arr1);

//methods
let array=[10,20,30,40];
console.log(array);
console.log(array.length);


let a1=arr2.push('era')
console.log(arr2);

let a2=arr2.pop();
console.log(arr2);

let a3=arr2.unshift('oyyee');
console.log(arr2);

let a4=arr2.shift();
console.log(arr2);

let a5=arr2.slice(0,2);//used to generate subarrays 
console.log(a5);
console.log(arr2);

let a6=arr2.splice(1,4);//this will remove the elements from the array and return the removed items as an array;
console.log(a6);
console.log(arr2);

//array.splice(index,deleteCount,items); //index = index for new item,deleteCount = number of items to be removed, starting from index next to index of new item,items = items to be added
let a71=['andriod','mac','ios','windows']
console.log(a71);
a71.splice(1,0,'linux')// this will insert an element at the given index 
console.log(a71)

//concat() joins two are more arrays
let a81=['andriod','mac']
let a91=['ios','windows']
console.log(a81.concat(a91))

//indexOf() Returns the index for the first occurrence of an element in an array and -1 if it is not present

//find()
/*
Returns the value of the first element in an array that passes a condition specified in the callback function.
Else, returns undefined if no element passed the test condition.

Syntax:
array.find(callback(item,index,array))
callback is a function to execute on each element of the arrayitem value represents the current element in the array
index value indicates index of the current element of the arrayarray value represents array on which find() is used, index and array are optional
*/
let myArray100 = ["Android", "iOS", "Windows", "Linux"];
let result = myArray100.find(element => element.length > 5);
console.log(result); //Android 


//findIndex()
/*
Returns the index of the first element in an array that passes a condition specified in the callback function. Returns -1 if no element passes the condition.

Syntax:
Array.findIndex(callback(item,index,array));callback is a function to execute on each element of the array
item value represents current element in the arrayindex represents index of the current element of the array
array represents array on which findIndex() is used.index and array are optional
*/
let myArray101 = ["Android", "iOS", "Windows", "Linux"];
let result1 = myArray101.findIndex(element => element.length > 5);
console.log(result1) //0


//filter()
/*
Creates a new array with elements that passes the test provided as a function.

Syntax:
array.filter(callback(item,index,array))callback is the Function to test each element of an arrayitem value represents the current element of the array
index value represents Index of current element of the arrayarray value indicates array on which filter() is used.
*/
let myArray102 = ["Android", "iOS", "Windows", "Linux"];
let result2 = myArray102.filter(element => element.length > 5);
console.log(result2)//["Android","Windows"]



//sort
let arr4=[50,100,70,4,1,0];
console.log(arr4.sort());// the values are not sorted according to mour need. Bcz the values are converted to strings and then sorted according to their unique codes.
console.log(arr4.sort((a,b)=>{
    return a-b;
}));// here the values are used if positive then it is swaps the place, negative or zero won't do anything.

let a7=Array.isArray(arr2)
console.log(a7);

let a8='ih';
console.log(typeof(a8));

let a9=Array.from(a8);
console.log(a9);//['i','h']
console.log(Array.isArray(a9));


let arr=[10,20,30,40];
console.log(arr);

for (let i in arr){
    console.log(i);
}// here for in loop only gives you the indexes

for (let i of arr){
    console.log(i);
}// here for of loop only gives you the values in the array

arr.forEach((value,index)=>{
    console.log(value,index);
})

let arr2=arr.filter((item)=>{
    return item>20;
})

console.log(arr2);

let arr3=arr.map((item)=>{
    return item-5;
})
console.log(arr3);




























