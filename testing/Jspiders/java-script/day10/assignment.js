
let btn=document.getElementById("btn");


console.log(btn);

function assignment(){
    let user=document.getElementById("user").value;
    let pass=document.getElementById("pass").value;
    if (user=='sai' && pass=='1234'){
    console.log('welcome');
    console.log(user);
    console.log(pass);
    // to open a website we can use the below two different methods
    window.open("https://www.google.com");
    window.location.href="https://www.google.com"
    }
    else{
    console.log('please enter the correct credentials');
    console.log(user);
    console.log(pass);
    window.location.reload();// for reloading
    history.go;// to goto previous page
    window.alert("rey data tappu raa yadava")
    }
    
}
