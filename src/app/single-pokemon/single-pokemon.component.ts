import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../bdd/pokedex';
import { Pokemon } from '../model/pokemon';

@Component({
  selector: 'app-single-pokemon',
  templateUrl: './single-pokemon.component.html',
  styleUrls: ['./single-pokemon.component.css']
})
export class SinglePokemonComponent implements OnInit {
pokemon:Pokemon = new Pokemon();
pokemons = POKEMONS;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
   this.pokemons = POKEMONS;

   let id = this.router.snapshot.params['id']; //récupérer l'id du pokemon dans l'url


  }

}
