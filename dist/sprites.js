/* eslint-disable import/prefer-default-export */

const BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

export function getPokemonSprite(pokemonID) {
  const spriteURL = `${BASE_URL}${pokemonID}.png`;
  return spriteURL;
}
