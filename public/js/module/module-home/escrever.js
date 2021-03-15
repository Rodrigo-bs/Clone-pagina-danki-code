export default function initEscrever(){
    const areaEscreva = document.querySelector('[data-banner="escreva"] h1')
    const textos = 'Web Design'.split('')

    function escreva(textos){
         areaEscreva.innerText = ''

         textos.forEach((letra, index) => {
              setTimeout(() => {
                   areaEscreva.innerText += letra
              }, index * 150)
         });
    }    
    
    escreva(textos)
    console.log("estou Vivo!!")
}