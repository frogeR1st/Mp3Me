/*consts*/
const BAddQueue1 = document.getElementById("BAddQueue1")
const BPlayNext1 = document.getElementById("BPlayNext1")
const BPlaylist1 = document.getElementById("BPlaylist1")
const BClear_Queue = document.getElementById("BClear_Queue")

/*vars*/
var queue_playlist = []

/*other*/
Array.prototype.insert = function ( index, ...items ) {
    this.splice( index, 0, ...items );
};

/*functions*/
    /*saveing and loading*/
function autoload() {
    queue_playlist = Array(localStorage.getItem("queue"));
    console.log(queue_playlist);
    
}

function reset_saved_data() {
    localStorage.setItem("queue", []);
}

    /*queue*/
function add_to_queue(item) {
    queue_playlist.push(item);
    localStorage.setItem("queue", queue_playlist);
}

function play_next(item) {
    queue_playlist.insert(1,item)
    localStorage.setItem("queue", queue_playlist);
}

/*other other other other*/

autoload()

/*click the buttons*/

BAddQueue1.onclick = function() {
    add_to_queue("song1")
}

BPlayNext1.onclick = function() {
    play_next("song1")
}

BClear_Queue.onclick = function() {
    reset_saved_data()
}