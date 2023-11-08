function continueClick(){
    document.getElementById("main-page").style.display = "block";
    document.getElementById("button-continue").style.display = "none";
    var audio = new Audio('msc.mp3');
    audio.play();
}