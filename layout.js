"use strict";

let deviceHeight = window.innerHeight;
let panelHeight = deviceHeight * 0.93;
let half = deviceHeight/2;

var scrollChange = function(){
    for(var i=0 ; i<5 ; i++){
        let node = document.getElementsByClassName('div-'+ (i+1))[0];
        if(window.scrollY > panelHeight * i - half){
            node.dataset.active = true;
        } else {
            node.dataset.active = false;
        }
    }
}
window.addEventListener('scroll',  scrollChange );

let scrolledY = 0,
tabBar = document.getElementById('tabBar');
window.addEventListener('scroll', function(){
    // console.log(window.scrollY);
    let scrollY = window.scrollY;
    
    if( (scrolledY - scrollY)<0 ){
        tabBar.setAttribute('aria-hidden', true)
    } else {
        tabBar.setAttribute('aria-hidden', false)
    }
    scrolledY = scrollY;
});


