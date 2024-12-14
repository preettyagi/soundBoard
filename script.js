let timerFlag = 0;
let timerDuration = 28;
let timer;

function startTimer() {
    setInterval(() => {
        --timerDuration;
        if(timerDuration <= 0){
            timerDuration = 28;
        }
        timer = 28-timerDuration;
    }, 1000);
    console.log(timerDuration);
}



document.getElementById('board').addEventListener("click", function(e){
    //console.log(e.target);
    if(e.button === 0){
        let audioLoop = document.querySelector(`audio[key-id="${e.target.id}"]`); // Selecting which loop to be played
        let active = document.getElementById(e.target.id); // Fetching div to make it active

        if(active.classList.contains('active')){
            audioLoop.pause();
            active.classList.remove('active');

        }
        else {
            if (timerFlag === 0) {
                audioLoop.currentTime = 0;
                timerFlag = 1;
                startTimer();
            } else {
                audioLoop.currentTime = timer;
            }
            active.classList.add('active');
            audioLoop.play();
            audioLoop.loop = true;
        }
    }
})