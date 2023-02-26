let inputs= document.getElementsByTagName("input");
let panel= document.getElementById("panel");
let button= document.getElementsByTagName("button")
let timerButton= button[0];
let toInputsButton= button[1];
//Set width of the inputs
for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.width= innerWidth/6;
};
let timeUnites= [`hours`,`minutes`, `seconds`];
let minutesOver= false;
let hoursOver= false;
let dicreaseSeconds=()=>{
    let seconds= document.getElementById(`seconds`);
    let secondsValue= +seconds.innerHTML;
    secondsValue--;
    if(secondsValue < 0){
        dicreaseMinutes()
        if(minutesOver){
            alert(`game over`);
            return clearInterval(timer);
        };
        secondsValue= 59;
    };
    seconds.innerHTML= secondsValue;
};
let dicreaseMinutes=()=>{
    let minutes= document.getElementById(`minutes`);
    let minutesValue= +minutes.innerHTML;
    minutesValue--;
    if(minutesValue < 0){
        dicreaseHours();
        if(hoursOver){
            return minutesOver=true;
        };
        minutesValue= 59;
    };
    minutes.innerHTML=minutesValue;
};
let dicreaseHours=()=>{
    let hours= document.getElementById(`hours`);
    let hoursValue= +hours.innerHTML;
    hoursValue--;
    if(hoursValue<0){
        return hoursOver= true;
    };
    hours.innerHTML= hoursValue;
};
//Convert inputs to text
let setTimer=()=>{
    let secondsInput= +(inputs[2].value);
    let minutesInput= +(inputs[1].value);
    let hoursInput= +(inputs[0].value);
    while(secondsInput>60){
        secondsInput-=60;
        minutesInput++;
    };
    while( minutesInput> 60){
        minutesInput-=60;
        hoursInput++;
    };
    inputs[2].value= secondsInput;
    inputs[1].value= minutesInput;
    inputs[0].value= hoursInput;
    //Convert value to text
    for (let i = 0; i < 3; i++) {
        let value= document.createElement("b");
        value.id= timeUnites[i];
        value.innerText= inputs[0].value;
        inputs[0].replaceWith(value);
    };
};
let convertToInputs=()=>{
    clearInterval(timer);
    for (let i = 0; i < 3; i++) {
       let input= document.createElement("input");
       input.setAttribute("type", "number");
       let text= document.getElementById(timeUnites[i]);
       let valueNum= +text.innerText;
       input.value= valueNum;
       text.replaceWith(input);  
    };
    timerButton.innerText= `Continue`;
};
let timer;
let startTimer=()=>{
    if(inputs!= 0){
        setTimer();
        timer= setInterval(dicreaseSeconds,1000);
        toInputsButton.innerText= `Pause`;
    };
};