//Tipos de dados
//String = ""
//Number = 01
//Object = {}
//boolean = true or false
//Array = []
const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

//Create map
const map = L.map("mapid", options).setView([-27.2152738,-49.6434174,19.25], 15);

//criar e adicionar o tileLayer ( mapa )
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Create Icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});


//Marker
L.marker([-27.2152738,-49.6434174,19.25], { icon })
  .addTo(map)

  
/* Image galery */

function selectImage(event) {
  const button = event.currentTarget

  //Remover todas as classes .active
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach(removeActiveClass);
  console.log(buttons)

  function removeActiveClass(button) {
    button.classList.remove('active')
  }

  //Selecionar a imagem clicada ( mostrar na principal )
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")

  //Atualizar o container de imageContainer
  imageContainer.src = image.src

  //Adicionar a classe .active para o botão clicado
  button.classList.add('active')
  console.log(button)
}