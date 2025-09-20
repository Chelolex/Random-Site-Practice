let menu = document.querySelector('.menu');
let menuNav = document.querySelector('.menu-nav');
menu.onclick = () => {
    menuNav.classList.toggle('active');
    if (menuNav.classList.contains('active')) {
        menu.innerHTML = 'Close';
        menuNav.style.display = 'block';
    }else {
        menu.innerHTML = 'Menu';
        menuNav.style.display = 'none';
    }
}

let hide = document.querySelector('.hideTitle');
let arrowDown = document.querySelector('.arrow-down-img');
let arrowUp = document.querySelector('.arrow-up-img');

hide.onclick = hideHeader;
    


function hideHeader () {
hide.classList.toggle('active');
    if (hide.classList.contains('active')) {
        hide.innerHTML = 'show';
        arrowDown.style.display = 'none';
        arrowUp.style.display = 'block';
        document.querySelector('.header-proper').style.display = 'none';
    }else {
        hide.innerHTML = 'hide';
        arrowDown.style.display = 'block';
        arrowUp.style.display = 'none';
        document.querySelector('.header-proper').style.display = 'flex';
        document.querySelector('.header-proper').style.flexDirection = 'column';
    }
}
        
let skipButton = document.querySelector('.skip-button');
let firstPhotos = document.getElementById('first-photos');

skipButton.onclick = () => {
    firstPhotos.scrollIntoView({behavior: "smooth"});
    hideHeader();
}
