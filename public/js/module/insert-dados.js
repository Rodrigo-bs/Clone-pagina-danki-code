import organizarEstrelas from 'http://127.0.0.1:5500/DankiCode/public/js/module/module-home/organizar.js'
import CreateElement from 'http://127.0.0.1:5500/DankiCode/public/js/module/create-element.js'

export default function dadosCursos(){
    async function dadosCursos(){
        const cursoContainer = document.querySelector('[data-cursos="container"] > .container')
        const dados = await fetch('http://127.0.0.1:5500/DankiCode/db/cursos.json')
        const dadosJson = await dados.json()

        dadosJson.forEach(cursoDado => {
            const curso = new CreateElement({
                filhos: [
                    'img',
                    'h1',
                    'p',
                    'div',
                    'a'
                ]
            }).gerar()

            curso.classList.add('curso-single', 'js-curso')
            curso.querySelector('a').innerText = 'Conheça o curso'
            curso.querySelector('div').classList.add('estrelas')


            curso.querySelector('img').setAttribute('src', cursoDado.img)
            curso.querySelector('h1').innerText = cursoDado.titulo  
            curso.querySelector('p').innerText = cursoDado.descricao

            for (let i = 0; i < cursoDado.estrelas; i++) {
                const estrelaSingle = document.createElement('img')

                estrelaSingle.setAttribute('src', 'http://127.0.0.1:5500/DankiCode/public/img/star.png')
                curso.querySelector('div').appendChild(estrelaSingle) 
            }

            cursoContainer.appendChild(curso)
        });

        organizarEstrelas()
    }

    dadosCursos()

}