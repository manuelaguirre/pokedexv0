const BASE_URL="https://pokeapi.co/api/v2/";
const pokeJSONfilterkeys = ["id","name", "weight", "stats","types"];


function filterPokeJSON(pokeJSON) {
    let filteredJSON = {};
    pokeJSONfilterkeys.forEach(element => {
        filteredJSON[element] = pokeJSON[element]
    });
    
    return filteredJSON;
}

export async function getPokemonList(limit=20, offset=0) {
    fetch(BASE_URL + `pokemon/?limit=${limit}&offset=${offset}`)
    .then(response => response.json())
    .then(response => console.log(response))
}

export function getPokemonInfo(pokemonID){
    let requestURL = BASE_URL + "pokemon/" + pokemonID
    
    return fetch(requestURL)
    .then(response => response.json())
    .then(responseJSON => filterPokeJSON(responseJSON));
       
       
                    
}