var interval
var sec = 0;
var min = 0;
var hr = 0;
var timer = document.getElementById("timer");
function twoDigits(time){
if (time<10){
 return "0"+time
} else {
    return time
}
}
function start(){
    interval = setInterval(watch,1000)

}
function pause(){    
    clearInterval(interval)
}
function end(){
    clearInterval(interval)
    sec =0;
    min = 0;
    hr = 0;
    timer.innerText = twoDigits(hr)+":"+twoDigits(min)+":"+twoDigits(sec)
}
function watch(){
    sec++;
    if (sec==60){
        min++;
        sec=0;
    }
    if (min==60){
        hr++;
        min=0;
    }
   
    timer.innerText = twoDigits(hr)+":"+twoDigits(min)+":"+twoDigits(sec)
}