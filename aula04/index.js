function adicionarFilme() {
    const $inputFavMovie = document.getElementById('filme')
    const $elementoListaFilmes = document.getElementById('listaFilmes')
    //var filmeFavorito =  $inputFavMovie.value
    $elementoListaFilmes.innerHTML = ('<img src=' + $inputFavMovie.value + '>') + $elementoListaFilmes.innerHTML
    $inputFavMovie.value = null
    //document.write('<img src=' + filmeFavorito + '>')

     }

function consertarFilme() {
    const $filmeQuebrado = document.getElementById("gremio")
    const $inputFavMovie = document.getElementById('filme')

console.log($inputFavMovie.value)

    $filmeQuebrado.src = $inputFavMovie.value
}
