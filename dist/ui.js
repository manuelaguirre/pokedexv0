/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
import * as sprites from './sprites.js';
import * as pokeapi from './pokeapi.js';

export function updateActiveListItem($item) {
  const $activeItem = document.querySelector('.pokemon-list-item.active');
  if ($activeItem) {
    $activeItem.classList.remove('active');
  }
  $item.classList.add('active');
}

function getPokeIDFromURL(url) {
  return url.match(/\/\d\d*/)[0].substring(1); // returns the id number in the pokemon resource URL, avoiding the 2 in "../v2/..", after eliminating the preceding /
}

export async function showPokeCard(pokemonID) {
  const pokemonJSON = await pokeapi.getPokemonInfo(pokemonID);
  const $pokecard = document.querySelector('#pokemon-card');

  const $sprite = document.querySelector('#pokemon-sprite>img');
  const $id = document.querySelector('#pokemon-id');
  const $name = document.querySelector('#pokemon-name');
  const $weight = document.querySelector('#pokemon-weight');
  const $stats = document.querySelectorAll('.pokemon-stat');
  const $types = document.querySelector('#pokemon-types');

  $sprite.setAttribute('src', sprites.getPokemonSprite(pokemonJSON.id));
  $sprite.setAttribute('alt', pokemonJSON.name);

  $id.innerHTML = `# ${pokemonJSON.id}`;
  $name.innerHTML = pokemonJSON.name;
  $weight.innerHTML = `Weight: ${pokemonJSON.weight}`;

  for (let index = 0; index < $stats.length; index++) {
    $stats[index].innerHTML = pokemonJSON.stats[0].base_stat;
  }

  $types.innerHTML = '';
  for (let index = 0; index < pokemonJSON.types.length; index++) {
    const $newType = document.createElement('div');
    $types.appendChild($newType);
    $newType.innerHTML = pokemonJSON.types[index].type.name.toUpperCase();
  }
}

export async function showPokeList(offset = 0, limit = 5) {
  const $pokeEntries = document.querySelectorAll('.pokemon-list-name');
  const $pokeListSprites = document.querySelectorAll('.list-sprite>img');
  const $pokeListItems = document.querySelectorAll('.pokemon-list-item');
  const pokeListJSON = await pokeapi.getPokemonList(offset);

  for (let i = 0; i < pokeListJSON.results.length; i++) {
    $pokeEntries[i].innerHTML = pokeListJSON.results[i].name;
    const pokeID = getPokeIDFromURL(pokeListJSON.results[i].url);
    $pokeListSprites[i].setAttribute('src', sprites.getPokemonSprite(pokeID));
    $pokeListSprites[i].setAttribute('alt', pokeListJSON.results[i].name);
    $pokeListItems[i].dataset.id = pokeID;
  }

  $pokeListItems.forEach(($item) => {
    $item.addEventListener('click', () => {
      updateActiveListItem($item);
      const pokeID = $item.dataset.id;
      showPokeCard(pokeID);
    });
  });
}
