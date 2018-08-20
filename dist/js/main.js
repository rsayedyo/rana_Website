//Select DOM (document object module) Items:
const menuBtn = document.querySelector('.menu-btn'); //a kind of selector, like assigning an Id for it and then calling it by the id. 
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');//since there are 4 menu items we cannot use querySelector because it will only grab the first one, instead we use all.

//Set the initial state of menu, whether it's open or closed. we want it closed by default
let showMenu = false; //We're using 'let' because we want to directly re-assign this at certain times and you cant do that with 'const' cuz they;re only for constant.

menuBtn.addEventListener('click', toggleMenu);//meaning it will listen for a clicking event, and when it happens it fires a ToggleMenu function. 

function toggleMenu() {
    if (!showMenu) { ///If the menu is not shown then the home page is displayed not the overlay of the navbar
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //set menu state
        showMenu = true;
    } else { //here we wanna do the opposite
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}

