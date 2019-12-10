{
    /* Toggle hamburger */

    const hamburgerInput = document.querySelector('.toggle-hamburger');
    const sideNav = document.querySelector('.nav--side');
    const content = document.querySelector('.content');

    hamburgerInput.addEventListener('click', () => {
        sideNav.classList.toggle('--hamburger-toggled' , hamburgerInput.checked);
        content.classList.toggle('--hamburger-toggled-content' , hamburgerInput.checked);
        console.log(content);
    });

    /* Side Navigation */

    const initSection = {};

    initSection.general = document.getElementById('general');
    initSection.links = document.getElementById('links');

    const navLinks = document.querySelectorAll('.nav__link');
    const sections = document.querySelectorAll('.container');

    function showSection() {
        for (let navLink of navLinks) {
            navLink.addEventListener('click', () => {
                const sectionToActivate = navLink.getAttribute('href').replace('#', '');
                console.log(sectionToActivate);
                
                for (let section of sections) {
                    const sectionId = section.getAttribute('id');
                    if (sectionId == sectionToActivate) {
                        section.classList.add('active');
                    } else {
                        section.classList.remove('active');
                    }
                }
            })
        }
    }

    function initSideNav() {
        if (!initSection.general.classList.contains('active')) {
            initSection.general.classList.add('active')
        }

        if (!initSection.links.classList.contains('active')) {
            initSection.links.classList.add('active')
        }

        
    }

    initSideNav();
    showSection();
}