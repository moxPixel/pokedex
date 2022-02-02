import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonDataService } from '../service/pokemon-data.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit {
  @Input() pokemon: any;
  pokemons: any;
  constructor(private router: ActivatedRoute, private routing: Router, private PokemonDataService: PokemonDataService) { }

  ngOnInit(): void {
    this.pokemons = this.PokemonDataService.getPokemons();  // recupere tout les pokemons
    let id = this.router.snapshot.params['id']; //récupérer l'id du pokemon dans l'url
    this.pokemon = this.PokemonDataService.getPokemon(id); // récupérer le pokemon correspondant à l'id
  }


  onSubmit(){
   let link = ['/single', this.pokemon.id];
   this.routing.navigate(link);
  }

}
