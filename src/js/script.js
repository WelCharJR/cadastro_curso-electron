var form = document.getElementById('form-curso')

var meusCursos = []

form.addEventListener("submit", function(event){
    event.preventDefault


    var nomeDoCurso = document.getElementById('nome-curso').value
    var cargaHoraria = document.getElementById('carga-horaria-curso').value

    var objetoCurso = {
        nome: nomeDoCurso,
        cargaHorarias: cargaHoraria

    }

    meusCursos.push(objetoCurso)

    console.log("Minha lista de cursos:", meusCursos)

    meusCursos.forEach(curso => {
        var minhaLi = document.createElement("li")

        minhaLi.innerText = curso.nome

        var lista = document.getElementById("minha-lista")

        lista.appendChild(minhaLi)
    })


})

