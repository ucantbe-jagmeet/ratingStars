let star = document.querySelectorAll('.star');

for(let x=0; x<5; x++){
    star[x].starval = x+1 ;
    star[x].addEventListener('click', function (e){
        
        for(let y=0; y<x; y++)
        {
            star[x].classList.add('color');
        }
    })
}