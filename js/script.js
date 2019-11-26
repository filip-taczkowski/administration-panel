{
    const hamburgerInput = document.querySelector('.toggle-hamburger');
    const sideNav = document.querySelector('.nav--side');
    const content = document.querySelector('.content');

    hamburgerInput.addEventListener('click', () => {
        sideNav.classList.toggle('--hamburger-toggled' , hamburgerInput.checked);
        content.classList.toggle('--hamburger-toggled-content' , hamburgerInput.checked);
        console.log(content);
    });
}