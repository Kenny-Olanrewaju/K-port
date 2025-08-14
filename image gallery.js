//script.js

document.addEventListener('DOMContentLoaded', function (){
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navbar = document.getElementById('navbar');


    // toggle mobile menu 
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        console.log("Hamburger clicked");
    });


    // scroll - based navbar color inversion 
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50){
            navbar.classList.add('inverted'); 
        }else{
            navbar.classList.remove('inverted');
        }
    });
    
});

