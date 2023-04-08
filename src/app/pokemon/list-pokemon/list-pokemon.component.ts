import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { POKEMONS } from 'src/app/pokemon/mock-pokemons';
import { Pokemon } from 'src/app/pokemon/pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit {
  pokemonList : Pokemon[]= POKEMONS;

  constructor(
    private router:Router,
    private pokemonService:PokemonService
    ){}

    ngOnInit(): void {
      this.pokemonService.getPokemonList()
        .subscribe(pokemonList => this.pokemonList = pokemonList)
    }

  goToPokemon(pokemon :Pokemon){

    this.router.navigate(['/pokemon',pokemon.id]);
  }

}
