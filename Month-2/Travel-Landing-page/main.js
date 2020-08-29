const header = document.querySelector('header');
const menuButton = document.getElementById('menu-button');
const navigation = document.querySelector('.navigation');
const closeButton = document.getElementById('close');
const headerLinks = document.querySelectorAll('.nav-link');

window.onscroll =  function(){
    
    if( document.body.scrollTop>=100 || document.documentElement.scrollTop>=100)
    {
        header.classList.add('header-colored');
        header.classList.remove('header-transparent');
    }
    else{
        header.classList.remove('header-colored');
        header.classList.add('header-transparent');
    }
}

menuButton.addEventListener('click',function(){
    navigation.classList.add('show');
    document.body.style.overflow='hidden';
});

closeButton.addEventListener('click',function(){
    navigation.classList.remove('show');
    document.body.style.overflow='';
});

for(let i=0;i<headerLinks.length;i++)
{
    headerLinks[i].addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });
    })
}
