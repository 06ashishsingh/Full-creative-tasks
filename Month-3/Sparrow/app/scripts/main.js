const sidebarMailOptions = document.querySelectorAll('.mail-options__item');
const sidebarChatOptions = document.querySelectorAll('.chat-options__item');
const clientChatDropdown = document.getElementById('chat-dropdown');
const clientSubList = document.querySelector('.client-sublist');
// const searchDropdown = document.getElementById('searchDropdown');
// const searchDropdownList = document.querySelector('.search__list');
// const searchInput = document.querySelector('.search__input');
const mailListItem = document.querySelectorAll('.mail-list__item');
// const chatIconsList = document.querySelectorAll('.chat__icons_item');
// const sender = document.querySelector('.sender');
// const senderDeatils = document.querySelector('.sender__details');

// searchDropdown.addEventListener('click',function(){
//     searchDropdownList.classList.toggle('search__list-show');
// }); 

// mailOptionsActive();
// mailListActive();
// chatIconsActive();

const tabsList = document.querySelectorAll('.tab');


function openTabs(){

    for(let i=0;i<sidebarMailOptions.length;i++)
    {

        if(i==0)
        {
            sidebarMailOptions[0].classList.add('mail-options-active');
            tabsList[0].style.display = 'block';
        }

        sidebarMailOptions[i].addEventListener('click',function(){
            
            for(let j=0;j<sidebarMailOptions.length;j++)
            {
                if(j!=i)
                {
                    sidebarMailOptions[j].classList.remove('mail-options-active');
                    tabsList[j].style.display = 'none';
                }
            }

            this.classList.add('mail-options-active');

            tabsList[i].style.display = 'block';

        });
    }
}

function chatOptionsActive(){

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
        });
    }
}




clientChatDropdown.addEventListener('click',function(event){

    event.stopPropagation();

    if(clientSubList.style.maxHeight)
    {
        clientSubList.style.maxHeight = null;
    }
    else
    {
        clientSubList.style.maxHeight = clientSubList.scrollHeight + 'px';
    }
    
});

function mailListActive(){
    
    for(let i=0;i<mailListItem.length;i++)
    {
        mailListItem[i].addEventListener('click',function(){

            for(let j=0;j<mailListItem.length;j++)
            {
                if(j!=i){
                    mailListItem[j].classList.remove('mail-list-active');
                }
            }
            
            this.classList.toggle('mail-list-active');
        });
    }
}


openTabs();
chatOptionsActive();
mailListActive();

// function mailOptionsActive(){

//     for(let i=0;i<sidebarMailOptions.length;i++)
//     {
//         sidebarMailOptions[i].addEventListener('click',function(){

//             for(let j=0;j<sidebarMailOptions.length;j++)
//             {
//                 if(j!=i){
//                     sidebarMailOptions[j].classList.remove('mail-options-active');
//                 }
//             }
            
//             this.classList.toggle('mail-options-active');
//         });
//     }
// }



// function chatIconsActive(){

//     for(let i=0;i<chatIconsList.length;i++)
//     {
//         chatIconsList[i].addEventListener('click',function(){

//             this.classList.toggle('chat-icons-active');
//         })
//     }
// }

// sender.addEventListener('click',function(){

//     senderDeatils.classList.toggle('sender-details-show');

// });

// window.onclick = function(event){

//     console.log(event.target);

//     if(event.target!=searchDropdown)
//     {
//         searchDropdownList.classList.remove('search__list-show');
//     }

//     if(event.target!=sender)
//     {
//         senderDeatils.classList.remove('sender-details-show');
//     }
// }


