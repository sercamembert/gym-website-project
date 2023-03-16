const addForm = document.querySelector('.newsletter__inputs');
addForm.addEventListener('submit',(e)=>sign(e))
const sign = (e)=>{
    e.preventDefault();
    let value = document.querySelector('.newsletter__input').value;
    let result = document.querySelector('.newsletter__response-container')
    const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(reg.test(value)){
        result.innerHTML = `<p class="newsletter__response newsletter__response--good">Zostałeś zapisany do newslettera.</p>`
    }else{
        result.innerHTML = `<p class="newsletter__response newsletter__response--wrong">Nieprawidłowy adres e-mail!</p>`
    }
}