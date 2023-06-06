let ul=document.querySelector('ul');
console.log(ul);

//parent node traversal
console.log(ul.parentElement);
console.log(ul.parentNode);
console.log(ul.parentElement.parentElement);
console.log(ul.parentNode.parentNode);

const html=document.documentElement;
console.log(html);
console.log(html.parentElement);
console.log(html.parentNode);

//child node traversal

console.log(ul.childNodes);//we have 5 child nodes but it gives 11 bcz of the number of lines and indentation
console.log(ul.firstChild);//this will give nodes bcz of that we are getting text 
console.log(ul.lastChild);//this will give nodes bcz of that we are getting text 
ul.childNodes[1].style.backgroundColor='blue';

console.log(ul.children);//this will return html collection of elements
console.log(ul.firstElementChild);//this will return the html element
console.log(ul.lastElementChild);

//sibiling travesal

console.log(ul.previousSibling);
console.log(ul.nextSibling);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);















