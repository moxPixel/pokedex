import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../bdd/pokedex';
import { Pokemon } from '../model/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemons:Pokemon[] = [];
  constructor() { }

  ngOnInit(): void {
    this.pokemons = POKEMONS;
  }

}
