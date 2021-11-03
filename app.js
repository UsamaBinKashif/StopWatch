let min = '00';
let sec = '00';
let msec = '00';
let minutes = document.getElementById("min");
let seconds = document.getElementById("sec");
let mSeconds = document.getElementById("mSec");
let interval;

function timer(){
   msec++
   mSeconds.innerHTML = msec;
   if(msec === 100){
       sec++
       seconds.innerHTML = sec;
       msec = '00';
   }
   else if(sec === 60){
       min++
       minutes.innerHTML = min;
       sec = '00';
       
   }
}

function start(){

    interval = setInterval(timer,10)  
}

function stop(){
    clearInterval(interval)
}

function reset(){
     min = '00';
     sec = '00';
     msec = '00';
     mSeconds.innerHTML = msec;
     seconds.innerHTML = sec;
     minutes.innerHTML = min;
     stop()

}