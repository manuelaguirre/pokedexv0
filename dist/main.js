import * as pokeapi from './pokeapi.js';
import * as ui from './ui.js';

let $currentPokemon;
const BASE_URL = 'https://pokeapi.co/api/v2/';
let myStorage = window.localStorage;

myStorage = window.localStorage;


async function testlog(jojo) {
  const testResponse = await pokeapi.getPokemonList(jojo);
  console.log(testResponse);
  return testResponse;
}

window.testlog = testlog;
window.showPokeCard = ui.showPokeCard;
window.showPokeList = ui.showPokeList;
