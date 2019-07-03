'use strict';

//initaite 

var headerwrap = document.querySelector('.header-wrap');
var profilepart = document.querySelector('.profile-part');
var workpart = document.querySelector('.work-part'); 
var projectpart = document.querySelector('.project-part');
var contactpart = document.querySelector('.contact-part');
var footerwrap = document.querySelector('.footer-wrap');

// onclick for the generating the id of header

function myfunction(id){
    console.log(id);  
    var class_name = document.getElementsByClassName(''+id)[0].getAttribute('class');
    console.log(class_name)
    if(class_name.search(id) >= 0){
        console.log('yes');
        var all_active = document.querySelectorAll('.active');
        var blank = document.querySelector('.empty-div');
        blank.classList.add('blank-page');
        for(let i=0 ; i < all_active.length ; i++){
            all_active[i].classList.remove('active');
        }
        setInterval(function(){
        var add_active = document.querySelector('.'+id);
        add_active.classList.add('active');
        },2000)
        
        setTimeout(function(){
            blank.classList.remove('blank-page');
        },5000)
    }
    else{
        console.log('no');
    }

}
