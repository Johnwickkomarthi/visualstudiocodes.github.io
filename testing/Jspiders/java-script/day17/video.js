let video=document.getElementById('video');
console.log(video);
let demo=document.getElementById('demo');

demo.addEventListener('click',()=>{
    window.navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
    })
    .then((stream)=>{
        video.srcObject=stream;
        video.play();
    })
    .catch((err)=>{
        console.log(err);
    })
})
