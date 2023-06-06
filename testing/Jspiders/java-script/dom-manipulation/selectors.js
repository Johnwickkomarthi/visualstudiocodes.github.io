// getElementById
// it will select single element
let title=document.getElementById('main-heading');
console.log(title);


// getElementsByClassName
// this will return a html collection
let listItem=document.getElementsByClassName('list-items');
console.log(listItem);

// getElementsByTagName
// this will return a html collection
let tags=document.getElementsByTagName('li');
console.log(tags);

// querySelector()
// this can select any id or tag or class but only the first instace of it(tags).
let anyItem=document.querySelector('li');
console.log(anyItem);

// querySelectorAll()
// it gives node list of all the given tags or class or id
let anyItems=document.querySelectorAll('li');
console.log(anyItems);








