//consts
const PlayerBarPlayLastButton = document.getElementById("PlayerBarPlayLastButton")

const PlayerBarRestartButton = document.getElementById("PlayerBarRestartButton")

const PlayerBarPlayButtonImg = document.getElementById("PlayerBarPlayButtonImg")
const PlayerBarPlayButton = document.getElementById("PlayerBarPlayButton")

const CurrentSongTitleElement = document.getElementById("CurrentSongTitleElement")

const PlayerBarPlayNextButton = document.getElementById("PlayerBarPlayNextButton")
const CurrentSongAuthorElement = document.getElementById("CurrentSongAuthorElement")
const CurrentSongDateElement = document.getElementById("CurrentSongDateElement")

const PlayButton1 = document.getElementById("PlayButton1")
const PlayButton2 = document.getElementById("PlayButton2")

const Progressbar = document.getElementById("Progressbar")


//vars
let playing = false

let CurrentSongTitle = "Title"
let CurrentSontAuthor = "Author"
let CurrentDate = "00/00/0000"
let CurrentAudio = new Audio("");

// Will execute update_progress_bar every 1 seconds 
var intervalID = window.setInterval(update_progress_bar, 1000);


function update_progress_bar() {
    if (playing) {
        Progressbar.value = CurrentAudio.currentTime
        Progressbar.max = CurrentAudio.duration
    }
}

function update_current_audio() {
    CurrentSongTitleElement.textContent = CurrentSongTitle
    CurrentSongAuthorElement.textContent = CurrentSontAuthor
    CurrentSongDateElement.textContent = CurrentDate
}


function set_current_audio(Audio_File, Title, Author, Date) {
    playing = true
    toggle_play()

    console.log("playing song")
    CurrentAudio = new Audio(Audio_File);
    CurrentSongTitle = Title
    CurrentSontAuthor = Author
    CurrentDate = Date
    update_current_audio()
}

function autoload() {
    
}

function toggle_play() {
    if (playing == true) {
        playing = false
        PlayerBarPlayButtonImg.src = "assets\\play_arrow.svg"
        CurrentAudio.pause()
    }
    else {
        playing = true
        PlayerBarPlayButtonImg.src = "assets\\pause.svg"
        CurrentAudio.play()
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

PlayButton1.onclick = function() {
    console.log("play song")
    set_current_audio("audio\\Walk Through the Park.mp3", "Walk Through the Park", "Track Tribe", "(21/4/2024)")
}

PlayButton2.onclick = function() {
    console.log("play song")
    set_current_audio("audio\\Alan Walker - Faded.mp3", "Faded", "Alan Walker", "(4/12/2015)")
}