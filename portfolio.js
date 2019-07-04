'use strict';

//initaite 

var headerwrap = document.querySelector('.header-wrap');
var profilepart = document.querySelector('.profile-part');
var workpart = document.querySelector('.work-part'); 
var projectpart = document.querySelector('.project-part');
var contactpart = document.querySelector('.contact-part');
var footerwrap = document.querySelector('.footer-wrap');

// onclick for the generating the id of header

function myfunction(class_of){
    var found_class = class_of.className;
    console.log(found_class);
    document.body.scrollTop = 0;
    var blank = document.querySelector('.empty-div');
    blank.classList.add('blank-page');
    var find_active = document.querySelectorAll('.active');
    var break_all = setInterval(function(){
        for(let i=0 ; i < find_active.length ; i++){
            find_active[i].classList.remove('active');
        } 
        var compare_id = document.querySelector('#'+found_class);
        compare_id.classList.add('active');
    }, 500);

    setTimeout(function(){
        clearInterval(break_all);
        blank.classList.remove('blank-page');
    },1000);

}
