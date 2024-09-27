
const teclado = document.querySelector('.teclado');
const shift = document.querySelector('.shift');
const buttons = document.querySelectorAll('.button');
const input = document.querySelector('input');
const space = document.querySelector('.button-space');
const del= document.querySelector('.button-delete')


let isShiftactive = false;







//functions


//shift
function shiftfunction()
{

    if(isShiftactive == false){

        isShiftactive = true;

        shift.style.backgroundColor = '#fff';
        shift.style.color = 'black';  

        buttons.forEach(function(key){
            key.innerHTML = key.innerHTML.toUpperCase();
        });
    }

    else if(isShiftactive == true){

        isShiftactive = false;
        shift.style.backgroundColor = '#0c9359';
        shift.style.color = 'white';  

        buttons.forEach(function(key){
            key.textContent = key.textContent.toLowerCase();
        });
    } 
}
//fim shift




//botao-espaço

function spacebutton(){
    input.value += " ";
}

//fim botao-espaço


//apagar
del.addEventListener('click',function(){
    input.value = input.value.slice(0,-1);
})
//fim apagar








//escrever
buttons.forEach(function(event){
    let buttonValue = event.innerHTML;
    event.addEventListener('click',function(){
        if(isShiftactive == true){
            input.value += buttonValue.toUpperCase();
        }
        else {
            input.value += buttonValue;
        }
    })

})
//fim escrever



space.addEventListener('click',spacebutton)
shift.addEventListener('click',shiftfunction);