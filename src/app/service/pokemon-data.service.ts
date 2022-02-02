import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {
  pokemon:Pokemon = new Pokemon();
  private pokemonUrlApi = 'api/pokemons'; //Contien l 'url de notre api (fictive ou reél)'
  constructor(private httpClient: HttpClient) { } // HttpClient est une classe de l'api angular qui contien les methode put,post,patch,delete,get




getPokemonsApi():Observable<Pokemon[]> {
     return this.httpClient.get<Pokemon[]>(this.pokemonUrlApi); //Retourne une tout les pokemons via l'api get(urlApi)
}



getOnePokemonApi(id: number):Observable<Pokemon> { // Recuperation d'un pokemon via l'api get(urlApi)
const url = `${this.pokemonUrlApi}/${id}`;
return this.httpClient.get<Pokemon>(url);
}



updatePokemon(pokemon:Pokemon):Observable<Pokemon>{  // Modification d'un pokemon via l'api put(urlApi)
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.put<Pokemon>(this.pokemonUrlApi,pokemon,httpOptions);
}

addPokemon(pokemon: Pokemon):Observable<Pokemon>{ // Ajout d'un pokemon via l'api post(urlApi)
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  return this.httpClient.post<Pokemon>(this.pokemonUrlApi,pokemon,httpOptions);
}


deletPokemon(pokemon: Pokemon):Observable<Pokemon>{  // Suppression d'un pokemon via l'api delete(urlApi)
  const url = `${this.pokemonUrlApi}/${pokemon.id}`;
  const httpOptions = { // Header(format de donnés qui transite dnas l url (jSon format))
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })  
  };
  return this.httpClient.delete<Pokemon>(url,httpOptions);
}





}
