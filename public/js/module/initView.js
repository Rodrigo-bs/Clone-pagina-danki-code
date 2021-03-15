export default function initView(){
    const menu = document.querySelectorAll('[data-view="menu"] a')

    function activeView(event){
        let pageName = event.target.getAttribute('href')
        let target = document.querySelector('target')
        const page = fetch(`http://127.0.0.1:5500/DankiCode/view/${pageName}.html`).then(resposta => resposta.text(''))
        event.preventDefault()

        target.setAttribute('page-view', pageName)

        page.then(content => {
            const section = document.querySelector('[data-view="section"]')
            section.innerHTML = content

            initStyle(pageName)
        })
    }

    function initStyle(pageName){
        const style = fetch(`http://127.0.0.1:5500/DankiCode/public/css/${pageName}.css`)
        .then( texto => texto.text())

        style.then(estilo => {
            const styleContainer = document.head.querySelector('style')
            styleContainer.innerHTML = estilo
        })
    }

    menu.forEach(a => a.addEventListener('click', activeView))
    menu[2].click()
}