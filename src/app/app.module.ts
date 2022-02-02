import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SinglePokemonComponent } from './single-pokemon/single-pokemon.component';
import { NavComponent } from './nav/nav.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { FormsModule } from '@angular/forms';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SinglePokemonComponent,
    NavComponent,
    EditPokemonComponent,
    AddPokemonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
