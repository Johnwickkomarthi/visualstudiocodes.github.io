let textarea=document.getElementById("textarea");
console.log(textarea);
let demo1=document.getElementById("demo1");
console.log(demo1);

let speech= new SpeechSynthesisUtterance;



demo1.onclick=function(){
    console.log(textarea.value);
    speech.text=textarea.value;
    speechSynthesis.speak(speech);
}
console.log(speech);