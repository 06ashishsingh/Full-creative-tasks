const sidebarMailOptions = document.querySelectorAll('.mail-options__item');
const sidebarChatOptions = document.querySelectorAll('.chat-options__item');
const chatDropdown = document.getElementById('chat-dropdown');

const searchInput = document.getElementById('search-input');
const searchList = document.querySelector('.search-list');

const mailListItem = document.querySelectorAll('.mail-list__item');

const chatIcons = document.querySelector('.chat__icons');
const chatIconsList = chatIcons.querySelectorAll('.fa');

const sender = document.querySelector('.sender');
const senderDeatils = document.querySelector('.sender__details');



active(sidebarMailOptions,'mail-options-active');
active(mailListItem,'mail-list-active');
active(chatIconsList,'chat-icons-active');
chatListActive();

function active(items,activeClass){

    for(let i=0;i<items.length;i++)
    {
        items[i].addEventListener('click',function(){

            for(let j=0;j<items.length;j++)
            {
                if(j!=i){
                    items[j].classList.remove(activeClass);
                }
            }
            
            this.classList.toggle(activeClass);
        });
    }

}


function chatListActive(){

    for(let i=0;i<sidebarChatOptions.length;i++)
    {
        sidebarChatOptions[i].addEventListener('click',function(){

            for(let j=0;j<sidebarChatOptions.length;j++)
            {
                if(j!=i){
                    sidebarChatOptions[j].classList.remove('chat-options-active');
                }
            }
            
            this.classList.toggle('chat-options-active');

            if(i==1)
            {
                let clientSubList = document.querySelector('.client-sublist');

                if(clientSubList.style.maxHeight){
                    clientSubList.style.maxHeight = null;
                }
                else{
                    clientSubList.style.maxHeight = clientSubList.scrollHeight + "px";
                }
            }

        });
    }
}


searchInput.addEventListener('click',function(){
    searchList.classList.add('search-list-show')
})

sender.addEventListener('click',function(){
    senderDeatils.classList.add('sender-details-show');
});

window.onclick = function(event){
    
    if(event.target != sender)
    {
        senderDeatils.classList.remove('sender-details-show');
    }
    if(event.target != searchInput)
    {
        searchList.classList.remove('search-list-show');
    }
}
