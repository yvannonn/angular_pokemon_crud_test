import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  template: `
   <h2> Entrer{{ pokemon?.name }}</h2>
   <p *ngIf="pokemon" class="center">
    <img [src]="pokemon.picture">
   </p>
   <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: [
  ]
})
export class EditPokemonComponent  implements OnInit{
pokemon: Pokemon |undefined;

  constructor(
    private route:ActivatedRoute,
    private pokemonService: PokemonService
  ){  
  }

  ngOnInit(): void {

    const pokemonId = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemonService.getPokemonById(+pokemonId) 
      .subscribe(pokemon => this.pokemon = pokemon)
    }
    else {
      this.pokemon = undefined;
    }
  }
  

}
