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

// testimonial
const testimonialContainer = document.querySelector('.testimonial-list');
let slidesList = document.querySelectorAll('.slide');
const dotList = document.querySelectorAll('.dot');

let slideIndex = 0;
const slideWidth = slidesList[slideIndex].clientWidth;

const firstClone = slidesList[0].cloneNode(true);
const lastClone = slidesList[slidesList.length-1].cloneNode(true);

testimonialContainer.append(firstClone);
testimonialContainer.prepend(lastClone);
testimonialContainer.style.transform = `translateX(${-slideWidth * slideIndex}px)`;

showSlide();

function showSlide(){

    let i=0;

    slideIndex++;

    if (slideIndex > slidesList.length)
    {
        slideIndex = 1;
    }
    
    for (i = 0; i < dotList.length; i++) {
        dotList[i].className = dotList[i].className.replace(" active-dot", "");
    }

    for (i=0;i<slidesList.length;i++){
        slidesList[i].className = slidesList[i].className.replace(" highlight","");
    }

    if(slideIndex==1)
    {
        testimonialContainer.style.transition = '0s';
    }
    else{

        testimonialContainer.style.transition = '.7s';
    }

    testimonialContainer.style.transform = `translateX(${-slideWidth * (slideIndex)}px)`;
    slidesList[slideIndex-1].className += " highlight";
    dotList[slideIndex-1].className += " active-dot";
    
    setTimeout(showSlide, 3000);
}