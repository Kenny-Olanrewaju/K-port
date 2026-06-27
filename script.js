//Navigationn Code

document.addEventListener('DOMContentLoaded', function (){
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navbar = document.getElementById('navbar');
    const links = navLinks.querySelectorAll('a');

    const setActiveLink = () => {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const currentHash = window.location.hash;

        links.forEach(link => {
            const href = link.getAttribute('href');
            let isActive = false;

            if (href === 'index.html' || href === '/' || href === './index.html') {
                isActive = (currentPath === 'index.html' || currentPath === '') && (currentHash === '' || currentHash === '#');
            } else if (href === 'projects.html') {
                isActive = currentPath === 'projects.html';
            } else if (href === '#about-me-section') {
                isActive = currentPath === 'index.html' && currentHash === '#about-me-section';
            } else if (href === '#contact-section') {
                isActive = currentPath === 'index.html' && currentHash === '#contact-section';
            } else if (href.startsWith('#')) {
                isActive = currentHash === href;
            }

            link.classList.toggle('active', isActive);
        });
    };


    // toggle mobile menu 
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        console.log("Hamburger clicked");
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(item => item.classList.remove('active'));
            link.classList.add('active');

            if (navLinks.classList.contains('show')) {
                navLinks.classList.remove('show');
            }
        });
    });

    setActiveLink();
    window.addEventListener('hashchange', setActiveLink);

    // scroll-based navbar background inversion from the about section
    window.addEventListener('scroll', () =>{
        if(window.scrollY > 800){
            navbar.classList.add('inverted2');
        }else{
            navbar.classList.remove('inverted2');
        }
    });

    // // scroll- based navbar background inversion for desktop screens to it's original state
    // window.addEventListener('scroll', () =>{
    //     if(window.scrollY>5800){
    //         navbar.classList.add('original');
    //     }else{
    //         navbar.classList.remove('original');
    //     }

    // });

    // scroll- based navbar color inversion for mobile screens to it's original state
    window.addEventListener('scroll', () =>{
        if(window.scrollY>4350){
            navbar.classList.add('original2');
        }else{
            navbar.classList.remove('original2');
        }

    });
    // About section visibility using IntersectionObserver
    const aboutSection = document.querySelector('.about-me-section');
    if (aboutSection) {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    aboutSection.classList.add('show');
                    observer.unobserve(aboutSection);
                }
            });
        }, { threshold: 0.15 });
        io.observe(aboutSection);
    }

});
