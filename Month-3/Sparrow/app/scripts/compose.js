const composeButton = document.querySelector('.compose-btn');
const composeOverlay = document.querySelector('.compose-overlay');
const closeButton = document.querySelector('.close-overlay');
const emailrecipient = document.querySelector('.email-recipient');
const emailrecipientText = document.getElementById('recipent-text');
const emailInputContainer = document.querySelector('.emailInput-container');
let emailTextarea = document.getElementById('email-textarea');

let value,flag=false,removeIcon,emailBody;
let emailArray = [];
let highlightFlag = false;
let emailId = '';


window.addEventListener("click", function(event) {

    emailTextarea.addEventListener('keyup',function(){

        if(emailTextarea.value.length>0) 
        {
            flag = false;
        }
        else{

            flag = true;
        }

    });

    if(emailInputContainer.childNodes.length>5)
    {
        flag=false;
    }

    if(flag)
    {
        if(event.target!=emailrecipient && event.target!=emailInputContainer && event.target!=emailTextarea) 
        {
            emailrecipient.style.display='block';
            emailInputContainer.style.display = 'none';
        }
        if(event.target==emailrecipientText)
        {
            emailrecipient.style.display='none';
            emailInputContainer.style.display = 'block';
        }
    }

});


emailrecipient.addEventListener('click',function(){
    emailrecipient.style.display='none';
    emailInputContainer.style.display='block';
});


emailTextarea.addEventListener('keydown',function(event){

    emailTextarea.style.width = ((emailTextarea.value.length + 1)*9) + 'px';

    if(event.keyCode==9  && emailTextarea.value.length>0)
    {
        emailTextarea.style.width = 50 + 'px';

        let value = emailTextarea.value;
        emailBody = document.createElement('div');
        let span = document.createElement('span');
        removeIcon = document.createElement('span');

        span.innerText = value;

        if(validEmail(value))
        {
            emailBody.classList.add('highlight');
        }
        else
        {
            emailBody.classList.add('highlight-error');
        }

        removeIcon.classList.add('remove-highlight');
        emailBody.append(span);
        emailBody.append(removeIcon);
        emailTextarea.value = "";
        emailTextarea.before(emailBody);

        emailArray.push(emailBody);
          
        let targeticon = removeIcon;
        
        for(let i=0;i<emailArray.length;i++)
        {
            emailArray[i].addEventListener('click',function(e){
                if(e.target==targeticon)
                {
                    emailArray[i].remove();
                    return;
                } 
            });      
        }
    }
});


function validEmail(){

        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return(regex.test(String(emailTextarea.value).toLowerCase()));
}

composeButton.addEventListener('click',function(){
    composeOverlay.classList.add('show-compose-overlay');
});

closeButton.addEventListener('click',function(){
    composeOverlay.classList.remove('show-compose-overlay');
});


