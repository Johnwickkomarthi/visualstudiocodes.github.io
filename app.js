const menuBtn=document.querySelector('#open-menu-btn');
const closeMenu=document.querySelector('#close-menu-btn');
const menu=document.querySelector('.nav_menu');
//open nav menu

menuBtn.addEventListener('click',() => {
    menu.style.display='block';
    closeMenu.style.display='inline-block';
    menuBtn.style.display='none';
})

//close nav menu

const closeNav = () => {
    menu.style.display='none';
    closeMenu.style.display='none';
    menuBtn.style.display='inline-block';

}

closeMenu.addEventListener('click', closeNav);