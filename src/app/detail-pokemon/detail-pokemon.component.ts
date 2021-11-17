import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {pokemon} from "../../model/pokemon";
import {PokemonsService} from "../pokemons/pokemons.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  //pokemons?: pokemon[] ;
  pokemonToDisplay?: pokemon;

  constructor(private route: ActivatedRoute, private router: Router,private pokeservice: PokemonsService) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    console.log(id);
    console.log(this.pokeservice.getSinglePokemon(id)
      .subscribe(pkm => this.pokemonToDisplay = pkm));
    /*this.pokemonToDisplay=this.pokeservice.getSinglePoken(id);
      this.pokemons=POKEMONS;
        for (let i = 0; i < this.pokemons.length; i++) {
            if (this.pokemons[i].id == id) {
         this.pokemonToDisplay = this.pokemons[i];
      }
    }*/
  }
  editPokemon(pokemonToedit: pokemon):void{
    const link =['pokemon/edit',pokemonToedit.id];
    this.router.navigate(link);
  }
  goBack(): void {
    this.router.navigate(['/pokemons']);
  }
  supprimer(){
    console.log("je suis dans la suppression"+ this.pokemonToDisplay);
    this.pokeservice.deletePokemon(this.pokemonToDisplay!);
    Swal.fire('Vous avez supprimer:',this.pokemonToDisplay?.name);
    this.goBack();
  }
}
