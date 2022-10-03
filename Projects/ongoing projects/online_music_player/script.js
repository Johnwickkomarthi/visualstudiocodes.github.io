//selecting all required tags or elements

const warpper = document.querySelector(".warpper"),
musicImg =warpper.querySelector(".img-area img"),
musicName=warpper.querySelector(".song-details .name"),
musicArtist=warpper.querySelector(".song-details .artist");
mainAudio=warpper.querySelector("#main-audio");
playPauseBtn=warpper.querySelector(".play-pause");



let musicIndex=3;

window.addEventListener("load",()=>{
    loadMUsic(musicIndex);//calling load music function once window loaded

})

//load music function
function loadMUsic(indexNumb){
    musicName.innerText = allMusic[indexNumb-1].name;
    musicArtist.innerText = allMusic[indexNumb-1].artist;
    musicImg.src=`${allMusic[indexNumb-1].img}.jpg`;
    mainAudio.src=`${allMusic[indexNumb-1].src}`;
}
//play music function
function playMusic(){
    warpper.classList.add("paused");
    playPauseBtn.querySelector("i").innerText="pause";
    mainAudio.play();
}

//pause music function
function pauseMusic(){
    warpper.classList.remove("paused");
    playPauseBtn.querySelector("i").innerText="play_arrow";
    mainAudio.pause();
}


//play or music butoon event
playPauseBtn.addEventListener("click",()=>{
    const isMusicPaused= warpper.classList.contains("paused");
    //if isMusicPaused is true then call pauseMusic else call playMusic
    isMusicPaused ? pauseMusic():playMusic();
})









