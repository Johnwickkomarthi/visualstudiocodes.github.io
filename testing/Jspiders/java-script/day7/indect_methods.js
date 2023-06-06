let a= document.getElementById("demo");
console.log(a);
a.textContent="hi prends";
let b=document.getElementsByClassName("demo1");
console.log(b);
console.log(b[0]);

b[0].style.backgroundColor="orange"
b[1].style.color="blue"
b[1].style.textAlign="center"
b[2].style.backgroundColor="green"

let c=Array.isArray(b);
console.log(c);
let d=Array.from(c)
console.log(d);
let e=Array.isArray(d);
console.log(e);

let f= document.getElementsByName("user")
console.log(f);
let g=document.getElementsByName("send")
console.log(g);
let h=document.getElementsByName("demo2")
console.log(h);
console.log(h[0]);
h[0].textContent="halloooooo";

let i=document.querySelector("#demo");
console.log(i);

let j=document.querySelectorAll(".demo1");
console.log(j);
let k=document.querySelector(".demo1");
console.log(k);

console.log(document.querySelector("*"));
console.log(document.querySelectorAll("*"));





























