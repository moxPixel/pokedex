import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { POKEMONS } from '../bdd/pokedex';
import { Pokemon } from '../model/pokemon';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit {
  pokemons = POKEMONS;
  pokemon: Pokemon = new Pokemon()
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Submit form !");
    this.pokemons.unshift(this.pokemon); // ajout via une fonction

    let link = ['/single', this.pokemon.id];
    this.router.navigate(link);
    alert('Felicitation vous venez d\'ajouter '+ this.pokemon.name + ' à votre pokedex')
}
}
