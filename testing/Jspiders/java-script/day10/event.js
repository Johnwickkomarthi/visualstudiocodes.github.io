// let btn=document.getElementById("btn");
// console.log(btn);
// function demo(){
//     console.log("vachhindi");
// }

// let demo=document.getElementById("demo");
// console.log(demo);

// let demo1=document.getElementById("demo1");
// console.log(demo1);

// let mouse=document.getElementById("mouse");
// console.log(mouse);
// function otp(){
//     window.setTimeout(()=> {
//         let res=Math.floor(Math.random()*1000);
//         console.log(res);
//     },5000)

//     let res=Math.floor(Math.random()*1000).toString(16);
//     console.log(res);
//     document.body.style.backgroundColor=`#${res}`;

// }

let color = prompt("enter the color");
let btn = document.getElementById("color");
btn.innerHTML += color;

function color1() {
    document.body.style.backgroundColor = `${color}`;
    document.body.style.transition = "ease all 5s"
}

function color2() {
    btn.style.color = "white";
    btn.style.backgroundColor = `${color}`;
}


    // Run the script below in the context of a web page and click on the page once. 
    // You'll see a message popping up in a second. If you click the page multiple times in one second, 
    // the alert only appears once.

    //clearTimeout() in JS
        /*
        The global clearTimeout() method cancels a timeout previously established by calling setTimeout().
        If the parameter provided does not identify a previously established action, this method does nothing.
        */
        const alarm = {
            remind(aMessage) {
                alert(aMessage);
                this.timeoutID = undefined;
            },
        
            setup() {
                if (typeof this.timeoutID === "number") {
                    this.cancel();
                }
            
                this.timeoutID = setTimeout(
                    (msg) => {
                        this.remind(msg);
                    },
                    1000,
                    "Wake up!"
                );
            },
        
            cancel() {
                clearTimeout(this.timeoutID);
            },
        };
        window.addEventListener("click", () => alarm.setup());
    
    
    // clearInterval() in JS
        /*
        The global clearInterval() method cancels a timed, repeating action which was previously established by a call to setInterval(). 
        If the parameter provided does not identify a previously established action, this method does nothing.
        */
        
        //basic syntax
        const intervalID = setInterval(myCallback, 500, 'Parameter 1', 'Parameter 2');
        
        function myCallback(a, b)
        {
         // Your code here
         // Parameters are purely optional.
         console.log(a);
         console.log(b);
        }
    

//in bulit events
/*

Event - click 
Event-handler - onclick 
Description - When the user clicks on an element, the event handler onclick handles it. 


Event - keypress 
Event-handler - onkeypress 
Description - When the user presses the keyboard's key, event handler onkeypress handles it. 


Event - keyup 
Event-handler - onkeyup 
Description - When the user releases the keyboard's key, the event handler onkeyup handles it. 


Event - load 
Event-handler - onload 
Description - When HTML document is loaded in the browser, event handler onload handles it 


Event - blur 
Event-handler - onblur 
Description - When an element loses focus, the event handler onblur handles it. 


Event - change 
Event-handler - onchange 
Description - When the selection of checked state change for input, select or text-area element changes, event handler onchange handles it. 
*/
 