// let demo = document.getElementById("demo")
// console.log(demo);

// demo.addEventListener("click" , () => {
//     let img = document.getElementById("img1")
//     console.log(img);
//     let display = img.classList.toggle("block")
//     if(display){
//         img.style.display = "none"
//     }else{
//         img.style.display = "block"
//     }
// })


// ----------jquery----------

function demo()
{
   let a = $("#img1").fadeToggle(3000)
   console.log(a);
    // $("#img1").css("height" , "100px")
}