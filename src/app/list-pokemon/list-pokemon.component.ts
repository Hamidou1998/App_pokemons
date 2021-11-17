import {Component, HostListener, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {pokemon} from "../../model/pokemon";
import {POKEMONS} from "../../shared/list.pokemons";
import {Router} from "@angular/router";
import {PokemonsService} from "../pokemons/pokemons.service";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {

  pokemons!: pokemon[];
  searchText = '';
  constructor(private router: Router,private pokeservice: PokemonsService) {

  }
  ngOnInit(): void {
    this.pokeservice.getListPokemons()
      .subscribe(listpkm => this.pokemons = listpkm);
  }
  selectPokemon(p:pokemon){
   //Swal.fire('Vous avez selectionner:',p.name);
    let link = ['/pokemon', p.id];
    this.router.navigate(link);
  }


}
