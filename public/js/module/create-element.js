export default function CreateElement(elemento){
    this.container = document.createElement('div') 
    this.gerar = function(){
        elemento.filhos.forEach(elemento => {
            elemento = document.createElement(elemento)
            this.container.appendChild(elemento)
        })

        return this.container
    }
}