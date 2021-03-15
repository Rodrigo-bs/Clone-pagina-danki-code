import escrever from 'http://127.0.0.1:5500/DankiCode/public/js/module/module-home/escrever.js'
import cursoOrdem from 'http://127.0.0.1:5500/DankiCode/public/js/module/module-home/organizar.js'
import insertDados from 'http://127.0.0.1:5500/DankiCode/public/js/module/insert-dados.js'

export default function cursos(){
    insertDados()
    escrever()
    setTimeout(cursoOrdem(), 0)
}