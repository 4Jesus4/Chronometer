let hours= document.getElementById("hours");
let minutes= document.getElementById("minutes");
let seconds= document.getElementById("seconds");
let timersBlinks= document.getElementsByClassName("time");
let startButton= document.getElementsByTagName("button")[0];//Gtet elements of the screen
let time;
let blinking;//This variables contains the functions of the chronometer
let blink=()=>{
    for (let i = 0; i < 2; i++) {
        let timerBlinks= timersBlinks[i];
        timerBlinks.style.color== "black"? timerBlinks.style.color= "#2beaffcd": timerBlinks.style.color= "black";  
    };
};//Make timers blink change color
let secondsIncrease=()=>{
    let secondsValue= +seconds.innerText;
    secondsValue++;
    seconds.innerHTML= secondsValue;
    if (secondsValue== 60) {
        minutesIncrease();
        return seconds.innerText= "00";
    };
};//increase seconds to 60, then increase minutes
let minutesIncrease=()=>{
    let minutesValue= +minutes.innerText;
    minutesValue++;
    minutes.innerHTML= minutesValue;
    if(minutesValue== 60){
        hoursIncrease();
        return minutes.innerText= "00";
    };
};
let hoursIncrease=()=>{
    let hoursValue= +hours.innerText;
    hoursValue++;
    hours.innerHTML= hoursValue;
};
let start=()=>{
    blinking= setInterval(blink,500);
    time= setInterval(secondsIncrease,1000);
};
let stopChronometer=()=>{
    clearInterval(time);
    clearInterval(blinking);
};
let startChronometer=()=>{
    if (startButton.innerText== "pause"){
        startButton.innerText= "continue";
        return stopChronometer();
    } else{
        startButton.innerText= "pause";
    };
    start();
};//start chronometer, to click again pause it and if it is clicked again continue
let resetChronometer=()=>{
    stopChronometer();
    seconds.innerText= "00";
    minutes.innerText= "00";
    hours.innerText= "00";
    startButton.innerText= "start";
};//Reset count