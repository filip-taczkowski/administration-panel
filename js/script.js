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

    function showActiveLink(activeLink) {
        for (let navLink of navLinks ){
            if (navLink.getAttribute('href') != activeLink.getAttribute('href')) {
                navLink.classList.remove('nav__link--active');
            } else {
                navLink.classList.add('nav__link--active');
            }
        }
    }

    function showSection() {
        for (let navLink of navLinks) {
            navLink.addEventListener('click', () => {
                const sectionToActivate = navLink.getAttribute('href').replace('#', '');                
                
                for (let section of sections) {
                    const sectionId = section.getAttribute('id');
                    if (sectionId == sectionToActivate) {
                        section.classList.add('active');                       
                    } else {
                        section.classList.remove('active');                        
                    }
                }

                showActiveLink(navLink);
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

    /* Modals */

    const logoutModal = document.querySelector('.modal__logout');
    const loginModal = document.querySelector('.modal__login');
    const messageModal = document.querySelector('.modal__message');

    function closeModal() {
        document.getElementById('overlay').classList.remove('show')
    }

    document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
        btn.addEventListener('click', function(e){
            e.preventDefault();
            closeModal();
        })
    })

    document.querySelector('#overlay').addEventListener('click', function(e) {
        if(e.target === this) {
            closeModal();
        }
    })

    document.addEventListener('keyup', function(e) {
        if(e.keyCode === 27) {
            closeModal();
        }
    })

    function openModal(modal){
        document.querySelectorAll('#overlay > *').forEach(function(modal) {
            modal.classList.remove('show');
        })
        document.querySelector('#overlay').classList.add('show')
        modal.classList.add('show')
    }

    const logoutIcons = document.querySelectorAll('.nav--top__logout')
    for (let logoutIcon of logoutIcons) {
        logoutIcon.addEventListener('click', () => {
            openModal(logoutModal);
            console.log(logoutModal);
        })
    }

    const loginIcons = document.querySelectorAll('.nav--top__profile')
    for(let loginIcon of loginIcons) {
        loginIcon.addEventListener('click', () => {
            openModal(loginModal);
            console.log(loginModal);
        })
    }

    const messageIcon = document.querySelector('.manager__tile')
    messageIcon.addEventListener('click', () => {
        openModal(messageModal);
        console.log(messageModal);
    })


    initSideNav();
    showSection();
}