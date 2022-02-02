import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PokemonDataService } from '../service/pokemon-data.service';

@Component({
  selector: 'app-single-pokemon',
  templateUrl: './single-pokemon.component.html',
  styleUrls: ['./single-pokemon.component.css']
})
export class SinglePokemonComponent implements OnInit {
  pokemon: any;
  pokemons: any;
  constructor(private router: ActivatedRoute, private routing: Router, private PokemonDataService: PokemonDataService) { }

  ngOnInit(): void {
    this.pokemons = this.PokemonDataService.getPokemons();  // recupere tout les pokemons
    let id = this.router.snapshot.params['id']; //récupérer l'id du pokemon dans l'url
    this.pokemon = this.PokemonDataService.getPokemon(id); // récupérer le pokemon correspondant à l'id
  }

  goBack(): void {
    this.routing.navigate(['']);
  }

  goModif(): void {
    this.routing.navigate(['edit', this.pokemon.id]);
  }
  remove() {
    const index = this.pokemons.indexOf(this.pokemon, 0);
    if (index > -1) {
      this.pokemons.splice(index, 1);
    }
    this.goBack();
  }
}
