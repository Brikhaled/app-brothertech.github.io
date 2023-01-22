var img = document.getElementById("6000");
img.addEventListener("mouseover", function(){
    this.style.transform = "scale(1.05)";
});
img.addEventListener("mouseout", function(){
    this.style.transform = "scale(1)";
});
var img = document.getElementById("6000");
var sound = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-melodical-flute-music-notification-2310.mp3");
img.addEventListener("click", function(){
    sound.play();
});
var img = document.getElementById("6100");
img.addEventListener("mouseover", function(){
    this.style.transform = "scale(1.05)";
});
img.addEventListener("mouseout", function(){
    this.style.transform = "scale(1)";
});
var img = document.getElementById("6100");
var sound = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-melodical-flute-music-notification-2310.mp3");
img.addEventListener("click", function(){
    sound.play();
});
var img = document.getElementById("6200");
img.addEventListener("mouseover", function(){
    this.style.transform = "scale(1.05)";
});
img.addEventListener("mouseout", function(){
    this.style.transform = "scale(1)";
});
var img = document.getElementById("6200");
var sound = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-melodical-flute-music-notification-2310.mp3");
img.addEventListener("click", function(){
    sound.play();
});
var img = document.getElementById("6300");
img.addEventListener("mouseover", function(){
    this.style.transform = "scale(1.05)";
});
img.addEventListener("mouseout", function(){
    this.style.transform = "scale(1)";
});
var img = document.getElementById("6300");
var sound = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-melodical-flute-music-notification-2310.mp3");
img.addEventListener("click", function(){
    sound.play();
});
var img = document.getElementById("6400");
img.addEventListener("mouseover", function(){
    this.style.transform = "scale(1.05)";
});
img.addEventListener("mouseout", function(){
    this.style.transform = "scale(1)";
});
var img = document.getElementById("6400");
var sound = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-melodical-flute-music-notification-2310.mp3");
img.addEventListener("click", function(){
    sound.play();
});
var img = document.getElementById("6000");
img.addEventListener("click", function(){
    window.open("https://www.google.dz/maps/place/35%C2%B052'37.4%22N+2%C2%B045'08.1%22E/@35.8770603,2.7480348,17z/data=!3m1!4b1!4m13!1m6!3m5!1s0x1288b5c13a5d030f:0x435282521600bbdd!2sBrother+tech!8m2!3d35.8763773!4d2.7488447!3m5!1s0x0:0xb105ff08e7fed5e1!7e2!8m2!3d35.8770559!4d2.7522622", "_blank");
});
var img = document.getElementById("6100");
img.addEventListener("click", function(){
    window.open("https://www.facebook.com/KEBinformatiqueom", "_blank");
});
var img = document.getElementById("6200");
img.addEventListener("click", function(){
    window.open("https://t.me/brotherpub", "_blank");
});
var img = document.getElementById("6400");
img.addEventListener("click", function(){
    window.open("tel:0658115019", "_blank");
});
var img = document.getElementById("6300");
img.addEventListener("click", function(){
    window.open("tel:0658323500", "_blank");
});
function showVideo() {
    var videoContainer = document.getElementById("video-container");
    var video = document.createElement("video");
    video.src = "https://pixabay.com/videos/download/video-90877_tiny.mp4";
    video.autoplay = true;
    video.loop = true;
    videoContainer.appendChild(video);
    videoContainer.style.display = "block";
  
    setTimeout(function() {
      videoContainer.style.display = "none";
    }, 5000);
  }
  
  