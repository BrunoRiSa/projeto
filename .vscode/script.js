function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //primeiro pegar a tag img
  const img = document.querySelector("#Profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./Assets Projeto/Galpão light.jpg")
  } else {
    // se estiver sem lightmode, manter a imagem original
    img.setAttribute("src", "./Assets Projeto/Galpao azul jpg.jpg")
  }

  /*Essa é uma maneira de Fazer o ToggleMode(modo ativar/desativar)
  
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } A seguir veremos o modo mais simples de fazer a mesma coisa*/
  if (html.classList.contains("Light")) {
  }
}
