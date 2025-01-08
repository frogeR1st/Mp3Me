//consts
const PlayerBarPlayLastButton = document.getElementById("PlayerBarPlayLastButton")

const PlayerBarRestartButton = document.getElementById("PlayerBarRestartButton")

const PlayerBarPlayButtonImg = document.getElementById("PlayerBarPlayButtonImg")
const PlayerBarPlayButton = document.getElementById("PlayerBarPlayButton")

const PlayerBarPlayNextButton = document.getElementById("PlayerBarPlayNextButton")



const current_audio = new Audio("audio\\Walk Through the Park.mp3");

//vars
let playing = false

let CurrentSongTitle = "Title"
let CurrentSontAuthor = "Author"
let CurrentDate = "00/00/0000"

//func
function autoload() {
    
}

function toggle_play() {
    console.log("test");
    
    if (playing == true) {
        playing = false
        PlayerBarPlayButtonImg.src = "assets\\play_arrow.svg"
        current_audio.pause()
    }
    else {
        playing = true
        PlayerBarPlayButtonImg.src = "assets\\pause.svg"
        current_audio.play()
    }
}

//playbutton (pause and play)
PlayerBarPlayButton.onclick = function(){
    console.log("play");
    toggle_play();
}

PlayerBarPlayLastButton.onclick = function() {
    console.log("play last");
}

PlayerBarPlayNextButton.onclick = function() {
    console.log("play next");
}

PlayerBarRestartButton.onclick = function() {
    console.log("restart");
}