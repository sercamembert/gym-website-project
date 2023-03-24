const sidebar = document.querySelector('.sidebar')
document.querySelector('.header__icon--menu').addEventListener('click',()=>{
    sidebar.classList.add('sidebar--open')
    document.querySelector('.header').classList.add('darken')
    document.querySelector('.wrapper').classList.add('darken')
})

document.querySelector('.sidebar__x-icon').addEventListener('click',()=>{
    sidebar.classList.remove('sidebar--open')
    document.querySelector('.header').classList.remove('darken')
    document.querySelector('.wrapper').classList.remove('darken')
})
