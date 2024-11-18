//consts
const PlayerBarPlayButtonImg = document.getElementById("PlayerBarPlayButtonImg")
const PlayerBarPlayButton = document.getElementById("PlayerBarPlayButton")


//vars
let playing = false

//func
function autoload() {
    
}

function toggle_play() {
    console.log("test");
    
    if (playing == true) {
        playing = false
        PlayerBarPlayButtonImg.src = "assets\\play_arrow.svg"
    }
    else {
        playing = true
        PlayerBarPlayButtonImg.src = "assets\\pause.svg"
    }
}

//playbutton (pause and play)
PlayerBarPlayButton.onclick = function(){
    toggle_play()}

