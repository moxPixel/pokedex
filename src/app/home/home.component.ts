import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../model/pokemon';
import { PokemonDataService } from '../service/pokemon-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemons:Pokemon[] = [];
  constructor(private pokemonService: PokemonDataService) { }

  ngOnInit(): void {
    // this.pokemons = POKEMONS;
    this.pokemonService.getPokemonsApi().subscribe(data =>{ // Recuperation des data de l'api et attribution de celle ci a la variable pokemons[]
      this.pokemons = data
      console.log(this.pokemons);
    });
 
  }

}
