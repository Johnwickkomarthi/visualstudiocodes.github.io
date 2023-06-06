let grand_parent = document.getElementById("grand_parent");
console.log(grand_parent);

grand_parent.addEventListener(
  "click",
  (e) => {
    e.target.style.backgroundColor = "blue";
    e.stopPropagation();
    console.log("grand parent clicked....");
  },
  false
); // we can have true/ false if it is false then propagation is stopped and bubbling is stopped from executing the events

let parent = document.getElementById("parent");
console.log(parent);

parent.addEventListener(
  "click",
  (e) => {
    e.target.style.backgroundColor = "green";
    e.stopPropagation();
    console.log("parent clicked....");
  },
  false
); // we can have true/ false if it is false then propagation is stopped and bubbling is stopped from executing the events

let child = document.getElementById("child");
console.log(child);

child.addEventListener(
  "click",
  (e) => {
    e.target.style.backgroundColor = "purple";
    e.stopPropagation();
    console.log("child clicked....");
  },
  false
); // we can have true/ false if it is false then propagation is stopped and bubbling is stopped from executing the events

//task
let grand_parent1 = document.getElementById("grand_parent1");
let parent1 = document.getElementById("parent1");
let parent2 = document.getElementById("parent2");
let child1 = document.getElementById("child1");

grand_parent1.addEventListener("click", (e) => {
  e.stopPropagation();
  e.target.style.backgroundColor = "lightgreen";
  console.log("grand_parent1 clicled");
});

parent1.addEventListener("click", (e) => {
  e.stopPropagation();
  e.target.style.backgroundColor = "blue";
  console.log("parent1 clicled");
});

parent2.addEventListener("click", (e) => {
  e.stopPropagation();
  e.target.style.backgroundColor = "green";
  console.log("parent2 clicled");
});

child1.addEventListener("click", (e) => {
  e.stopPropagation();
  e.target.style.backgroundColor = "violet";
  console.log("child clicled");
});
let grand_parent2 = document.getElementById("grand_parent2");
let parent3 = document.getElementById("parent3");
let parent4 = document.getElementById("parent4");
let child2 = document.getElementById("child2");
let child4 = document.getElementById("child4");

grand_parent2.addEventListener("click", (e) => {
  e.stopPropagation();
  e.target.style.backgroundColor = "green";
  console.log("grand_parent2 clicled");
});

parent3.addEventListener("click", (e) => {
  e.stopPropagation();
  e.target.style.backgroundColor = "brown";
  console.log("parent3 clicled");
});

parent4.addEventListener("click", (e) => {
  e.stopPropagation();
  e.target.style.backgroundColor = "violet";
  console.log("parent4 clicled");
});

child2.addEventListener("click", (e) => {
  e.stopPropagation();
  e.target.style.backgroundColor = "blue";
  console.log("child2 clicled");
});

child4.addEventListener("click", (e) => {
  e.stopPropagation();
  e.target.style.backgroundColor = "yellow";
  console.log("child4 clicled");
});
