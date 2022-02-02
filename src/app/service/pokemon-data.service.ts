import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { POKEMONS } from '../bdd/pokedex';
import { Pokemon } from '../model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {
  pokemon:Pokemon = new Pokemon();
  private pokemonUrlApi = 'api/pokemons';
  constructor(private httpClient: HttpClient) { }




getPokemonsApi():Observable<Pokemon[]> {
     return this.httpClient.get<Pokemon[]>(this.pokemonUrlApi); //Retourne une tout les pokemons via l'api get(urlApi)
}



getOnePokemonApi(id: number):Observable<Pokemon> {
const url = `${this.pokemonUrlApi}/${id}`;
return this.httpClient.get<Pokemon>(url);
}



updatePokemon(pokemon:Pokemon):Observable<Pokemon>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.put<Pokemon>(this.pokemonUrlApi,pokemon,httpOptions);
}

addPokemon(pokemon: Pokemon):Observable<Pokemon>{
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  return this.httpClient.post<Pokemon>(this.pokemonUrlApi,pokemon,httpOptions);
}




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
