
const toggleClass = "header__is-sticky";
const bgClass = "header__cart-bg";
const iconClass = "header__icon--header-scroll"
window.addEventListener('scroll',()=>{
    const header = document.querySelector('.header');
    const cart = document.querySelector('.header__item--orange');
    const icons = document.querySelectorAll('.header__icon')
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
        header.classList.add(toggleClass);
        cart.classList.add(bgClass)
      icons.forEach(element => {
        console.log(element)
        element.classList.add(iconClass)
      })
      } else {
        header.classList.remove(toggleClass);
        cart.classList.remove(bgClass)
        icons.forEach(element => element.classList.remove(iconClass))
      }
})