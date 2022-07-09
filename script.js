const nickname = document.querySelectorAll('input')[0];
const password = document.querySelectorAll('input')[1];
const button = document.querySelector('#btn');

button.classList.add('buttonOff');

function buttonVersion(){
    
    if(nickname.value && password.value.length>=8){
        button.classList.add('buttonReady');
        button.classList.remove('buttonOff');
    }else{
        button.classList.add('buttonReady');
        button.classList.remove('buttonOff');
    }
}

nickname.addEventListener('input', buttonVersion);
password.addEventListener('input', buttonVersion);