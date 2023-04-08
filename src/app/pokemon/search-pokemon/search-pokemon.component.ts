
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { Observable, Subject } from "rxjs";

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: [
  ]
})
export class SearchPokemonComponent implements OnInit {

  searchTerms =new Subject<string>();

  //{..'a'....."b"..."ab"}
  pokemons$ : Observable<Pokemon[]>
  ngOnInit(): void {
    
  }

constructor(private router :Router){}


  search(term : string){}

  goToDetail(pokemon:Pokemon){

    const link =['/pokemon',pokemon.id];
    this.router.navigate(link);
  }
}
