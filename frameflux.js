document.addEventListener('DOMContentLoaded', function (){
    const hamburger = document.getElementById('hamburger');
    const navLinks= document.getElementById('nav-links');


    // toggle mobile menu 
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        console.log("Hamburger clicked");
    });

    
});