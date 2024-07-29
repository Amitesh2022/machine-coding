




function scrollEvent(event){

    console.log("Scroll");

    // Api calls or any other functions
}
const throttleEvent=throttle(scrollEvent,2000)
function throttle(callback,delay){
    let isWaiting=false
    return (...args)=>{
        if(isWaiting===true)
        {
            return;
        }
        callback(...args);
       isWaiting=true;
       setTimeout(()=>{

        isWaiting=false;
        },delay);
    };

}
const scroll= document.querySelector('.watch');
scroll.addEventListener('scroll',throttleEvent);