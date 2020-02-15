import * as pokeapi from "./pokeapi.js";
import * as ui from "./ui.js";

let $currentPokemon
const BASE_URL="https://pokeapi.co/api/v2/"
let myStorage = window.localStorage;

myStorage = window.localStorage;




async function testlog(){
console.log(await pokeapi.getPokemonInfo(1));
}
 testlog();
