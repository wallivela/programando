import {
  buscarPokemon,
  buscarPokemonPorNombre,
} from "./controllers/controllers.js";

let root = document.getElementById("root");
let botonDeBusqueda = document.getElementById("buscar-pokemon");
let barraDeBusqueda = document.getElementById("barra-pokemon");
let previousBtn = document.getElementById("previous");
let nextBtn = document.getElementById("next");
let previousUrl = ""
let nextUrl = "";

root.innerHTML = `CARGANDO`;

async function mostrarPokemones(url) {
  root.innerHTML = `CARGANDO`;
  
  let objetoPokemon = await buscarPokemon(url);

  previousUrl = objetoPokemon.previous;
  nextUrl = objetoPokemon.next;

  let html = "";
  objetoPokemon.arrayDePokemones.forEach((pokemon) => {
    let cardPokemon = `
    <div class='card'>
      <div class='card-image-container'>
        <img class='card-image' src='${pokemon.imagen}' data-id='${pokemon.id}' data-nombre='${pokemon.nombre}' data-tipo='${pokemon.tipos[0].type.name}' />
      </div>
      <div class='card-info'>
        <span>ID: ${pokemon.id}</span>
        <span>Nombre: ${pokemon.nombre}</span>
        <span>Tipo: ${pokemon.tipos[0].type.name}</span>
      </div>
    </div>`;
    html += cardPokemon;
  });
  root.innerHTML = html;
}
previousBtn.addEventListener("click", async () => {
  mostrarPokemones(previousUrl);
});
nextBtn.addEventListener("click", async () => {
  mostrarPokemones(nextUrl);
});

mostrarPokemones();

barraDeBusqueda.addEventListener("input", async function () {
  if (barraDeBusqueda.value.trim() !== "") {
    let pokemonBuscado = await buscarPokemonPorNombre(barraDeBusqueda.value);
    let cardPokemon = `<div class='card'>
                          <span>${pokemonBuscado.nombre}</span>
                          <span>${pokemonBuscado.id}</span>
                          <span>${pokemonBuscado.tipos[0].type.name}</span>
                          <img class='card-image' src='${pokemonBuscado.imagen}'/>
                    </div>`;

    root.innerHTML = cardPokemon;
  }
});

let body = document.querySelector("body");
let colors = ["yellow", "black", "green", "black", "blue"];
let colorIndex = 0;

function changeBackgroundColor() {
  body.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}
setInterval(changeBackgroundColor, 2000);




