if(window.innerWidth>=768){
    const ellipseTop = document.querySelector('.ellipse--top')
const ellipseBottom = document.querySelector('.ellipse--bottom')
document.querySelector('.welcome__par').addEventListener('click',event=>{
    event.preventDefault();
    document.querySelector('.welcome__video').style.opacity = 0;
    ellipseTop.classList.add('ellipse__end-top')
    ellipseBottom.classList.add('ellipse__end-bottom')
    setTimeout(()=>{
        window.location.href = 'main.html';
    },900)

})
}else{
    window.location.href = 'main.html';
}

