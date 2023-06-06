let demo=document.getElementById("demo");

demo.onclick= ()=>{
    // interpolation == string inside backticks
    // prototype == copy of an object
    window.navigator.mediaDevices.getDisplayMedia();
}
//to fetch cuurent locationy
function geo_location(){
    window.navigator.geolocation.getCurrentPosition((position)=>{
        //this is object destructring. object values into varibles.
        let {latitude, longitude}=position.coords;
        console.log(latitude,longitude);
        let url=`https://www.google.com/maps/place/${latitude},${longitude}`;
        console.log(url);
    })
}

geo_location()
console.log(window.navigator.geolocation);

let geo = navigator.geolocation;

function successCallback(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
}

function errorCallback(error) {
  console.error(`Error: ${error.message}`);
}

let watchId = geo.watchPosition(successCallback, errorCallback);
console.log(watchId);
/*
To fetch the live location using the watchPosition method in JavaScript, you can follow these steps:

1.  Create a new instance of the Geolocation object:

        const geo = navigator.geolocation;


2. Use the watchPosition method to start watching the user's location. This method takes two arguments: a success callback function that will be called each time the user's location changes, and an error callback function that will be called if there is an error:

        const watchId = geo.watchPosition(successCallback, errorCallback);

3. Define the success callback function. This function will receive a Position object that contains the latitude and longitude of the user's location:

        function successCallback(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        }


4. Define the error callback function. This function will receive an error object that contains information about the error:

        function errorCallback(error) {
        console.error(`Error: ${error.message}`);
        }

5. To stop watching the user's location, call the clearWatch method and pass in the watchId returned by watchPosition:

        geo.clearWatch(watchId);
Here's the complete code:

const geo = navigator.geolocation;

function successCallback(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
}

function errorCallback(error) {
  console.error(`Error: ${error.message}`);
}

const watchId = geo.watchPosition(successCallback, errorCallback);
Note that the watchPosition method may not work on all browsers or devices, and may require user permission to access the location.

*/




//online and offline

document.write((navigator.onLine)?"online...😁":"offline....😢");


//video

let video=document.getElementById("video");
console.log(video);
video.onclick=()=>{
        let playorpause=video.classList.toggle('play');
        if(playorpause){
                video.play();
        }
        else{
                video.pause();
        }
}

let demo2=document.getElementById("demo2");
console.log(demo2);
demo2.onclick=()=>{
        let playorpause=video.classList.toggle('play');
        if(playorpause){
                video.play();
                demo2.textContent="pause";
        }
        else{
                video.pause();
                demo2.textContent="play";
        }
}

