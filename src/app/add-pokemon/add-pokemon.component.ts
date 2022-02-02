import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { POKEMONS } from '../bdd/pokedex';
import { Pokemon } from '../model/pokemon';
import { PokemonDataService } from '../service/pokemon-data.service';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit {
  pokemons = POKEMONS;
  pokemon: Pokemon = new Pokemon()
  constructor(private router: Router,private pokemonService: PokemonDataService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Submit form !");
      this.pokemonService.addPokemon(this.pokemon).subscribe(data => { // Appel de la fonction ajout d 'un pokemon lors de la soumission du formulaire (api)
      this.pokemon = data;
    })
    let link = ['/single', this.pokemon.id];
    this.router.navigate(link);

}
}
