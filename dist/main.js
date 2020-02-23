import * as pokeapi from './pokeapi.js';
import * as ui from './ui.js';

const INIT_LIST_ID = 0;
const BASE_URL = 'https://pokeapi.co/api/v2/';
const myStorage = window.localStorage;

async function init() {
  await ui.showPokeList(INIT_LIST_ID);
  const $defaultActiveItem = document.querySelector('.pokemon-list-item');
  ui.updateActiveListItem($defaultActiveItem);
  const pokeID = $defaultActiveItem.dataset.id;
  ui.showPokeCard(pokeID);
  ui.addButtonListeners();
}


async function testlog(jojo) {
  const testResponse = await pokeapi.getPokemonList(jojo);
  console.log(testResponse);
  return testResponse;
}

window.testlog = testlog;
window.showPokeCard = ui.showPokeCard;
window.showPokeList = ui.showPokeList;

init();

/* TODO:
        -que la lista pueda recorrerse con las flechitas del teclado
        -un input para ir directamente a cierto pokemon
        -un DEFAULT_LIMIT por si en el futuro alguien quiere usar listas más grandes, aunque esto llevaría muchos cambios en las funciones de ui
        -corregir problemas del estilo "Nidorin-a" o "Tornadus-incarnate"

                xflechas para la lista

*/
