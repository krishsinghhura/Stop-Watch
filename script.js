let play=document.querySelector(".play");
let pause=document.querySelector(".pause");
let reset=document.querySelector(".reset");
let sec=document.querySelector(".seconds");
let min=document.querySelector(".minute");
let hr=document.querySelector(".hour");
let hourInt=0;
let minuteInt=0;
let secondInt=0;

let on;
play.addEventListener("click",()=>{
    on=setInterval(onPlay,1000);
    play.disabled=true;
});

pause.addEventListener("click",()=>{
    clearInterval(on);
    play.disabled=false;
})

function onPlay(){
    if(secondInt>=59){
        secondInt=0;
        minuteInt++;
        min.innerHTML=minuteInt+" :";
    }
    if(minuteInt>=59){
        minuteInt=0;
        hourInt++;
        hr.innerHTML=hourInt+" :";
    }
    secondInt++;
    sec.innerHTML=secondInt;
}