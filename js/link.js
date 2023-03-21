const ellipseTop = document.querySelector('.ellipse--top')
const ellipseBottom = document.querySelector('.ellipse--bottom')
document.querySelector('.welcome__par').addEventListener('click',event=>{
    event.preventDefault();
    ellipseTop.classList.add('elipse-end-top')
    ellipseBottom.classList.add('elipse-end-bottom')
    window.location.href = 'main.html';
})