import initClickFora from './click-fora.js'

export default function ativarMenu(){
    const menuMobileBar = document.querySelector('[data-menu="bar"]')
    const menuMobile = document.querySelector('[data-menu="mobile"] nav')
    const container = document.querySelector('[data-menu="mobile"]')
    const eventos = ['click', 'ontouchstart']

    function activeMenu(){
        menuMobile.classList.add('ativo')

        initClickFora(eventos, container, () => {
            menuMobile.classList.remove('ativo')
        })
    }

    eventos.forEach(evento => menuMobileBar.addEventListener(evento, activeMenu));
}