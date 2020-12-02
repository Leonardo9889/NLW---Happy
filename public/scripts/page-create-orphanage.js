//Tipos de dados
//String = ""
//Number = 01
//Object = {}
//boolean = true or false
//Array = []

//Create map
const map = L.map("mapid").setView([-27.2152738,-49.6434174,19.25], 15);

//criar e adicionar o tileLayer ( mapa )
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Create Icon

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// Criar popup
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240
}).setContent('Lar das meninas <a href="/orphanage?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg"> </a>');

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    //Remove icon ( remove o icone do map )
    marker && map.removeLayer(marker)

    // Add icon layer ( adiciona o icone no mapa )
    marker = L.marker([lat,lng], { icon })
    .addTo(map)
})


// Adicionar fotos
function addPhotoField() {
   // pegar o container de fotos #images
   const container = document.querySelector('#images')
   //pegar o container para dupliacar .new-upload
   const fieldContainer = document.querySelectorAll('.new-upload')
   //realizar o clone da ultima imagem adicionada
   const newFieldContainer = fieldContainer[fieldContainer.length -1].cloneNode(true)
   // Verificar se o campos esta vazio, se sim, não adicionar ao container de images
   const input = newFieldContainer.children[0]
   
   if(input.value == ""){
     return
   }
   // Limpar o campo antes de adicionar ao container de images.
   input.value = ""
   
   //adicionar o clone ao container de #images
   container.appendChild(newFieldContainer)
}

function deleteField(event) {
  const span = event.currentTarget

  const fieldsContainer = document.querySelectorAll('.new-upload')

  if(fieldsContainer.length <= 1) {
    span.parentNode.children[0].value = ""
    return
  }


  // Deletar o campo
  span.parentNode.remove()
}

//slecionar sim ou não
function toggleSelect (event) {
  //retirar a class .active (dos botões)
  document.querySelectorAll('.button-select button')
  .forEach( button => button.classList.remove('active'))
  //colocar a class .active nesse botão clicado
  const button = event.currentTarget
  button.classList.add('active')
  //pegar o botão clicado

  //verificar se sim ou não
  //atualizar o input(hidden) com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]')

  input.value = button.dataset.value
  
  
}



  