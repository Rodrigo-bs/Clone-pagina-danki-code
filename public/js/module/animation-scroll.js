export default function initAnimacaoSection(){
    function ativarAnimacao(){
        const sections = document.querySelectorAll('[data-animation="scroll"]')
        const metadeWindow = window.innerHeight * 0.7

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top
            const visible = (sectionTop - metadeWindow) < 0

            if(visible)
                section.classList.add('ativo')
        })
    }

    window.addEventListener('scroll', ativarAnimacao)
}