const btn = document.getElementById("btnModoPagina")
const icones = [...document.querySelectorAll("i")]
const container = document.getElementById('container')
const textos = [...document.querySelectorAll('.texto')]
const modeIcon = document.getElementById('modeIcon')

btn.addEventListener('click', () => {
    if(modeIcon.classList.contains('fa-moon')) {
        modeIcon.classList.remove('fa-moon')
        modeIcon.classList.add('fa-sun')
    } else {
        modeIcon.classList.remove('fa-sun')
        modeIcon.classList.add('fa-moon')
    }


    container.classList.toggle('darkModeContainer')
    icones.map((el) => {
        el.classList.toggle('darkModeIcones')
    })
    textos.map((text) => {
        text.classList.toggle('darkModeTextos')
    })
})