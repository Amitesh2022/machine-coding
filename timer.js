const para= document.querySelector('.watch');
const button= document.querySelector('.btn-container');

button.addEventListener('click',onClick);
let [seconds, minutes,hours] =[0, 0 ,0];
let Stopid;

function onClick(event){
    if(event.target.name==='Start')
    {
       Stopid=  setInterval(
            ()=>{
            seconds++;
            if(seconds>59)
            {
                minutes++;
                seconds=seconds-60;
            }
            if(minutes>59)
            {
                hours++;
                minutes=minutes-60;
            }
            
            para.innerText=`${hours>9?`${hours} : ` :`0${hours} : `}`+`${minutes>9?`${minutes} : ` :`0${minutes} : `}`+ `${seconds>9?`${seconds}` :`0${seconds}`}`;
            },1000);
       
    }
    if(event.target.name==='Stop')
    {
       
            clearInterval(Stopid);
        
    }
    if(event.target.name==='Reset')
    {
        para.innerText='00 : 00 : 00';
        seconds=0;minutes=0;hours=0;
    }
}