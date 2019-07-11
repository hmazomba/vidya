let vid = document.getElementById("myVideo");
//let fillbar = document.getElementById("fill");
let currentTime = document.getElementById("currentTime");
let volumeSlider = document.getElementById("volume");
let progressBar = document.getElementById("progress-bar");

progressBar.addEventListener("click", seek);

function seek(e){
    var percent = e.offsetX / this.offsetWidth;
    vid.currentTime = percent * vid.duration;
    e.target.value = Math.floor(percent / 100);
    //e.target.innerHTML = progressBar.value;
}

function updateProgressBar(){
    let percentage = Math.floor((100 / vid.duration) * vid.currentTime);
    progressBar.value = percentage
}
function playOrPause()
{
    if(vid.paused){
        vid.play();
        $("#playBtn").attr("class", "fas fa-pause");
    }
    else{
        vid.pause();
        $("#playBtn").attr("class", "fas fa-play");
    }
}


vid.addEventListener('timeupdate', function(){
    updateProgressBar();
    convertTime(Math.round(vid.currentTime));

    if(vid.ended){
        $("#playBtn").attr("class", "fas fa-pause");
    }
})



volumeSlider.addEventListener("input", function(){
    vid.volume = this.value / 100;
})

function convertTime(seconds){
    let min = Math.floor(seconds/60);
    let sec = seconds % 60;

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime.textContent = min + ":" + sec;

    totalTime(Math.round(vid.duration));
}

function totalTime(seconds)
{
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime.textContent += " / " + min + ":" + sec;

}