const buttonToggle =document.getElementById('toggle') as HTMLButtonElement;
const get= document.getElementById('get') as HTMLElement

buttonToggle.addEventListener("click" , ()=>{
    if(get.style.display === 'none'){
        get.style.display = 'block';

    }
    else{
        get.style.display = 'none'
    }
})
