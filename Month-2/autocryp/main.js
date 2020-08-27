const header = document.getElementById('header');

window.onscroll = function(){
    fixedHeader();
}

function fixedHeader(){

    if(document.body.scrollTop >= 80 || document.documentElement.scrollTop >= 80)
    {
        header.style.background = '#313a5a';
        header.style.boxShadow = '0 2px 4px 0 rgba(0,0,0,0.3)';
    }
    else
    {
        header.style.background = 'transparent';
        header.style.boxShadow = ''; 
    }    

}