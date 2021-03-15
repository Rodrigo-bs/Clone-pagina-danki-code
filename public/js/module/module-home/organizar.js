export default function organizarEstrelas(){
    function getInfos(){
        const cursos = document.querySelectorAll('.js-curso')
        
        cursos.forEach(curso => {
            const estrelas = curso.querySelectorAll('.estrelas img')
            curso.classList.add('estrelas-'+estrelas.length)
        })
    }

    getInfos()
}