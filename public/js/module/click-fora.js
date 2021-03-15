export default function clickFora(events, elemento, callback){
    const html = document.documentElement
    if(!elemento.hasAttribute('default')){
        setTimeout(html.addEventListener('click', clickOutside), 0)
        elemento.setAttribute('default', '')
    }

    function clickOutside(event){
        events.forEach(evento => {
            if(!elemento.contains(event.target)){
                elemento.removeAttribute('default')
                html.removeEventListener(evento, clickOutside)
                callback()
            }
        });
    }
}
