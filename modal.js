const modalIsClicked= document.querySelector('.modal');

modalIsClicked.addEventListener('click',modalShow)
const container=document.querySelector('.container')

container.addEventListener('click',closeModal);

function modalShow(){
    container.classList.remove('hide');
    modalIsClicked.classList.add('hide');
}
function closeModal(){
    container.classList.add('hide');
    modalIsClicked.classList.remove('hide');
}