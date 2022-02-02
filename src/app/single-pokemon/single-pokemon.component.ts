import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    let id = this.router.snapshot.params['id']; //récupérer l'id du pokemon dans l'url
    this.pokemon = this.PokemonDataService.getOnePokemonApi(id).subscribe(data => { // récupération du pokemon via l'api
      this.pokemon = data;
    })
  }

  goBack(): void { // redirection vers la page d'accueil
    this.routing.navigate(['']); 
  }

  goModif(): void { // redirection vers la page de modification
    this.routing.navigate(['edit', this.pokemon.id]);
  }
  remove() {
    this.PokemonDataService.deletPokemon(this.pokemon).subscribe(_ =>  this.goBack()); // Suppression du pokemon via l'api methode delete(), et redirection vers la page d'accueil
  }
}
