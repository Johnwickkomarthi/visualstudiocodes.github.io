let title= document.querySelector('#main-heading');
console.log(title);
title.style.color='red'; // this will make an inline styling. To make this happen to list of items we have to use loops.
let listItems=document.querySelectorAll('.list-items');
console.log(listItems);
for(i=0;i<listItems.length;i++){
    listItems[i].style.color='brown';
}

//creating elements & adding elememts
let ul=document.querySelector('ul');
let li=document.createElement('li');
ul.append(li);
// modifying the text
const firstListItem=document.querySelector('.list-items');
console.log(firstListItem.innerText);// only text
console.log(firstListItem.textContent);// if the text in two different lines it will give in two lines 
console.log(firstListItem.innerHTML);// along with text elemets are also displayed

//attributes
li.innerText='X-men';
li.setAttribute('class','list-items');
li.removeAttribute('class');
console.log(title.getAttribute('id'));//return the attribute name

li.classList.add('list-items');
console.log(li.classList.contains('list-items'));

//remove elements
li.remove();//X-men is removed

