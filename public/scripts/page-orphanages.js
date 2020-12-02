//Tipos de dados
//String = ""
//Number = 01
//Object = {}
//boolean = true or false
//Array = []

//Create map
const map = L.map("mapid").setView([-27.2152738, -49.6434174, 19.25], 15);

//criar e adicionar o tileLayer ( mapa )
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Create Icon

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// Busca os dados do HTML localizados no span
const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach( span =>  {
  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng,
    openOnWeekends: span.dataset.openOnWeekends
  }

  //Executa a funcao para adicioanr o marcador no mapa
  addMarker(orphanage)
})

// Adicionar o marcador com os dados que vem do HTML
function addMarker({id, name, lat, lng}) {
  // Criar popup
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"> </a>`
  );

  //Marker
  L.marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup(popup);
}

