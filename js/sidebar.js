const sidebar = document.querySelector('.sidebar')
const header = document.querySelector('.header')
const wrapper = document.querySelector('.wrapper')
const menuIcon = document.querySelector('.header__icon--menu')
const xIcon = document.querySelector('.sidebar__x-icon')

const classAction = (action,sidebar,header,wrapper)=>{
    if(action =="add"){
        sidebar.classList.add('sidebar--open')
        header.classList.add('darken')
        wrapper.classList.add('darken')
    }else{
        sidebar.classList.remove('sidebar--open')
        header.classList.remove('darken')
        wrapper.classList.remove('darken')
    }
    }

menuIcon.addEventListener('click', () => {
    classAction("add",sidebar,header,wrapper)
  })
  
  xIcon.addEventListener('click', () => {
    classAction("remove",sidebar,header,wrapper)
  })
  
  document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && event.target !== menuIcon) {
        classAction("remove",sidebar,header,wrapper)
    }
  })
