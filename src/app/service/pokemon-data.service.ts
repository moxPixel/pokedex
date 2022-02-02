import { Injectable } from '@angular/core';
import { POKEMONS } from '../bdd/pokedex';
import { Pokemon } from '../model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {
  pokemon:Pokemon = new Pokemon();
  constructor() { }

getPokemons(){
    return POKEMONS;
  }

getPokemon(id:number){
  let pokemons = this.getPokemons();
  for(let i =0; i < pokemons.length; i++) {
    if(pokemons[i].id == id){
      this.pokemon = pokemons[i];
    }
 }
 return this.pokemon;

}


}
