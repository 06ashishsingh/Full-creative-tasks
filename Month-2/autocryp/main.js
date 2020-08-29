const header = document.getElementById('header');
const menuIcon = document.querySelector('.menu-icon');
const closeMenuIcon = document.querySelector('.close-icon');
const navBlock = document.getElementById('nav-bar');

window.onscroll = function(){
    fixedHeader();
}

function fixedHeader(){

    if(document.body.scrollTop >= 80 || document.documentElement.scrollTop >= 80)
    {
        header.classList.add('header-fixed');
    }
    else
    {
        header.classList.remove('header-fixed');
    }    

}

menuIcon.addEventListener('click',function(){
    navBlock.classList.add('show-navbar');
    document.body.style.overflow = 'hidden';
});

closeMenuIcon.addEventListener('click',function(){
    navBlock.classList.remove('show-navbar');
    document.body.style.overflow = '';
})