import { InMemoryDbService } from "angular-in-memory-web-api";
import { POKEMONS } from "../bdd/pokedex";



export class InMemoryDataService implements InMemoryDbService{
  createDb(){   // Creation d'une api fictive sur la base de la constante POKEMONS
    let pokemons = POKEMONS;
    return { pokemons } 
  }

}
// !!! installer via npm dans le projet npm install angular-in-memory-web-api
// si vous voulez simuler un comportement api . ne pas oublier l'import dans app.module.ts