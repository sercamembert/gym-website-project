window.addEventListener('load',()=>{
    const welcomeLogo = document.querySelector('.welcome__logo')
    const welcomeDescription = document.querySelector('.welcome__text')
    const welcomeButton = document.querySelector('.welcome__par')
    setTimeout(()=>{
        welcomeLogo.classList.remove('none')
        welcomeDescription.classList.remove('none')
        welcomeButton.classList.remove('none')
    },200)
    }
)