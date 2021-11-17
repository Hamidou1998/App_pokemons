import { Component, OnInit } from '@angular/core';
import {pokemon} from "../../model/pokemon";
import {ActivatedRoute} from "@angular/router";
import {PokemonsService} from "../pokemons/pokemons.service";

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
  styleUrls: ['./pokemon-edit.component.scss']
})
export class PokemonEditComponent implements OnInit {

  singPokemon?: pokemon ;
  constructor(private rout:ActivatedRoute,private pokeservice: PokemonsService) { }

  ngOnInit(): void {
    let id = +this.rout.snapshot.params['id'];
    //this.singPokemon=
      this.pokeservice.getSinglePokemon(id)
        .subscribe(pkm => this.singPokemon = pkm);
    //console.dir(this.singPokemon);
  }

}
