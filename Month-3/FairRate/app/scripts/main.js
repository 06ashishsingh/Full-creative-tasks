// const headerDropdownIcon = document.getElementById('dropdown-icon');
// const headerDropdown = document.getElementById('header-dropdown');

// headerDropdownIcon.addEventListener('click',function(){
//     headerDropdown.classList.toggle('dropdown--show');
// });

const inputItems = document.querySelectorAll('.checkbox');
const checkmark = document.querySelectorAll('.checkmark');

const nextButtonList = document.querySelectorAll('.btn--next');
const nameSection = document.getElementById('name-section');
const addressSection = document.getElementById('address-section');
const uploadSection = document.getElementById('upload-section');

window.addEventListener('click',function(event){
    
    for(let i=0;i<inputItems.length;i++)
    {
        if(event.target==checkmark[i])
        {
            inputItems[i].classList.toggle('input--checked');
        }
    }
});


for(let i=0;i<nextButtonList.length;i++)
{
    nextButtonList[i].addEventListener('click',function(event){

        if(i==0){
            nameSection.style.display = 'none';
            addressSection.style.display = 'block';
        }
        if(i==1){
            nameSection.style.display = 'none';
            addressSection.style.display = 'none';
            uploadSection.style.display = 'block';
        }

    });
}