namespace DrumPad{

// Soundelemente
const sound:HTMLAudioElement [] = [];
sound[0] = new Audio("assets/A.mp3");
sound[1] = new Audio("assets/C.mp3");
sound[2] = new Audio("assets/F.mp3");
sound[3] = new Audio("assets/G.mp3");
sound[4] = new Audio("assets/hihat.mp3");
sound[5] = new Audio("assets/kick.mp3");
sound[6] = new Audio("assets/laugh-1.mp3");
sound[7] = new Audio("assets/laugh-2.mp3");
sound[8] = new Audio("assets/snare.mp3");

// Funktion für die Soundelemente
function playSample(thesound: number) {
    sound[thesound].play();
};

//Funktion für sound1
document.getElementById("pad1").addEventListener("click", function(){
    playSample(0)
});
//Funktion für sound2
document.getElementById("pad2").addEventListener("click", function(){
    playSample(1)
});
//Funktion für sound3
document.getElementById("pad3").addEventListener("click", function(){
    playSample(2)
});
//Funktion für sound4
document.getElementById("pad4").addEventListener("click", function(){
    playSample(3)
});
//Funktion für sound5
document.getElementById("pad5").addEventListener("click", function(){
    playSample(4)
});
//Funktion für sound6
document.getElementById("pad6").addEventListener("click", function(){
    playSample(5)
});
//Funktion für sound7
document.getElementById("pad7").addEventListener("click", function(){
    playSample(6)
});
//Funktion für sound8
document.getElementById("pad8").addEventListener("click", function(){
    playSample(7)
});
//Funktion für sound9
document.getElementById("pad9").addEventListener("click", function(){
    playSample(8)
});
}