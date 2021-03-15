import initClickFora from './click-fora.js'

export default function ativarMenu(){
    const conta = document.querySelector('[data-menu="conta"]')
    const btnEntrar = conta.querySelector('.btn-entrar')
    const eventos = ['click', 'ontouchstart']

    function activeMenu(){
        conta.classList.add('ativo')

        initClickFora(eventos, conta, () => {
            conta.classList.remove('ativo')
        })
    }

    eventos.forEach(evento => btnEntrar.addEventListener(evento, activeMenu));
}