import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SinglePokemonComponent } from './single-pokemon/single-pokemon.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent

  },
  {
    path:'single/:id',
    component: SinglePokemonComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
