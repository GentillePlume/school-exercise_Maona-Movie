new WOW().init();

var myAudio = document.getElementById('bgvid');
myAudio.volume = 0;

var volume = false;

keyboardJS.bind(['enter'], function(e) {
  if (volume == false) {
    myAudio.volume = 1;
    volume = true;
  } else if (volume == true) {
    myAudio.volume = 0;
    volume = false;
  } else {
    alert("FATAL ERROR BURN DOWN SYSTEM AUTO DESTRUCTION");
  }
});

var myVideo = document.getElementById('bgvid');
var play = true;

keyboardJS.bind(['ctrl'], function(e) {
  if (play == false) {
    myVideo.play();
    play = true;
  } else if (play == true) {
    myVideo.pause();
    play = false;
  } else {
    alert("FATAL ERROR BURN DOWN SYSTEM AUTO DESTRUCTION");
  }
});