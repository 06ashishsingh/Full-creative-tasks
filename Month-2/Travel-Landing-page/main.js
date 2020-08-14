let menuButton = document.querySelector('i');
let menu = document.querySelector('.menu');
let show = false;

menuButton.addEventListener("click",function(){
    if(show===false)
    {
        menu.style.display='block';
        document.body.style.overflow='hidden';
        show=true;
    } 
    else if(show===true)
    {
        menu.style.display='';
        document.body.style.overflow='';
        show=false;
    }
});

let menuLinks = menu.getElementsByTagName('a');

menuLinks[0].addEventListener('click',function(){
    let articles = document.querySelector('.featured');
    articles.scrollIntoView({
        behavior:'smooth'
    });
    document.body.style.overflow='';
});

menuLinks[1].addEventListener('click',function(){
    let locations = document.querySelector('.locations');
    locations.scrollIntoView({
        behavior:'smooth'
    });
    document.body.style.overflow='';
});

menuLinks[2].addEventListener('click',function(){
    let video = document.querySelector('.video-section');
    video.scrollIntoView({
        behavior:'smooth'
    });
    document.body.style.overflow='';
})


