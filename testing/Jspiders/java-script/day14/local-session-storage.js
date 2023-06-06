// window.sessionStorage.setItem("name","johnwick");
// console.log(window.sessionStorage.getItem("name"));

// window.localStorage.setItem("name","johnwick");
// console.log(window.localStorage.getItem("name"));
// window.localStorage.removeItem("name");


let btn=document.getElementById("btn");



function store(){
    let username=document.getElementById("uname").value;
    let pass=document.getElementById("pass").value;
    window.sessionStorage.setItem("name",username);
    window.sessionStorage.setItem("password",pass);
    window.localStorage.setItem("name",username);
    window.localStorage.setItem("password",pass);
}

let button=document.getElementById("button");

button.addEventListener("click",(e)=>{
    e.preventDefault();
    let username=document.getElementById("username").value;
    let pass=document.getElementById("password").value;
    window.localStorage.setItem("name",username);
    window.localStorage.setItem("password",pass);
})

document.cookie="user = sai";
document.cookie="password= 456";