
const toggleClass = "header__is-sticky";
const bgClass = "header__cart-bg";
window.addEventListener('scroll',()=>{
    const header = document.querySelector('.header');
    const cart = document.querySelector('.header__item--orange');
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
        header.classList.add(toggleClass);
        cart.classList.add(bgClass)
      } else {
        header.classList.remove(toggleClass);
        cart.classList.remove(bgClass)
      }
})