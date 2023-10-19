let screen= document.getElementById('screen');
buttons= document.querySelectorAll('button');
let screenVal='';
for (item of buttons) {
    item.addEventListener('click',(f)=>{
        buttonText= f.target.innerText;
        console.log(buttonText);
        if(buttonText=='X'){
            buttonText='*';
            screenVal+=buttonText;
            screen.value=screenVal;
        }
        else if(buttonText=='AC'){
            screenVal= "";
            screen.value=screenVal;
        }
        else if(buttonText=='D')
        {
            screen.value = screen.value.substring(0, screen.value.length - 1);
        }
        else if(buttonText=='='){
            screen.value=eval(screenVal);
        }
        else{
            screenVal+=buttonText;
            screen.value=screenVal;
        }
    })
}