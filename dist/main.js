import * as pokeapi from "./pokeapi.js";

let $currentPokemon
const BASE_URL="https://pokeapi.co/api/v2/"
let myStorage = window.localStorage;
const pokeJSONfilterkeys = ["id","name", "weight", "stats","types"]

myStorage = window.localStorage;



function buildPokeCard(pokeJSON){
    
}

function filterPokeJSON(pokeJSON) {
    let filteredJSON = {};
    pokeJSONfilterkeys.forEach(element => {
        filteredJSON[element] = pokeJSON[element]
    });
    
    return filteredJSON;
}

console.log(pokeapi.getPokemonInfo(1));


