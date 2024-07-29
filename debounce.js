const input =document.querySelector('.input');



function inputhadler(event){

    console.log(event.target.value);

    // Api calls or any other functions
}

function debounce(callback,delay){
    let id;
    return (...args)=>{
       clearTimeout(id);
       id= setTimeout(()=>{

            callback(...args)

        },delay);
    };

}

const debounceSearch= debounce(inputhadler,1000)
input.addEventListener("keyup",debounceSearch);

