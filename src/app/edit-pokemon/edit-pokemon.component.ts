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
    let id = this.router.snapshot.params['id']; //récupérer l'id du pokemon dans l'url
    this.pokemon = this.PokemonDataService.getOnePokemonApi(id).subscribe(data =>{
      this.pokemon = data;
    })
  }


  onSubmit(){
    this.PokemonDataService.updatePokemon(this.pokemon).subscribe(data => {
      this.pokemon = data;
    });
   let link = ['/single', this.pokemon.id];
   this.routing.navigate(link);
  }

}
