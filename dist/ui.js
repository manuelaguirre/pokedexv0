/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
import * as sprites from './sprites.js';

function getPokeIDFromURL(url) {
  return url.match(/\d\d\d/);
}

export function showPokeCard(pokemonJSON) {
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

export function showPokeList(pokeListJSON) {
  const $pokeEntries = document.querySelectorAll('.pokemon-list-name');
  const $pokeListSprites = document.querySelectorAll('.list-sprite>img');


  for (let i = 0; i < pokeListJSON.results.length; i++) {
    $pokeEntries[i].innerHTML = pokeListJSON.results[i].name;
    const pokeID = getPokeIDFromURL(pokeListJSON.results[i].url);

    $pokeListSprites[i].setAttribute('src', sprites.getPokemonSprite(pokeID));
    $pokeListSprites[i].setAttribute('alt', pokeListJSON.results[i].name);
  }
}
