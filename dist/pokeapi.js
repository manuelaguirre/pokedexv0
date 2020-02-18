
const BASE_URL = 'https://pokeapi.co/api/v2/';
const pokeJSONfilterkeys = ['id', 'name', 'weight', 'stats', 'types'];


function filterPokeJSON(pokeJSON) {
  const filteredJSON = {};
  pokeJSONfilterkeys.forEach((element) => {
    filteredJSON[element] = pokeJSON[element];
  });

  return filteredJSON;
}

export async function getPokemonList(offset = 0, limit = 5) {
  return fetch(`${BASE_URL}pokemon/?limit=${limit}&offset=${offset}`)
    .then((response) => response.json());
}

export async function getPokemonInfo(pokemonID) {
  const requestURL = `${BASE_URL}pokemon/${pokemonID}`;

  return fetch(requestURL)
    .then((response) => response.json())
    .then((responseJSON) => filterPokeJSON(responseJSON));
}
