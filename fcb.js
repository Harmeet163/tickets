burger= document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.navList')
rightNav =document.querySelector('.rightNav')

burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('s-class-resp');
    navList.classList.toggle('s-class-resp');
    navbar.classList.toggle('h-nav-resp');
})