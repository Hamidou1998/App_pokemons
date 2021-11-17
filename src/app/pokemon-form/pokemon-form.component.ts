import {Component, Input, OnInit} from '@angular/core';
import {pokemon} from "../../model/pokemon";
import {Router} from "@angular/router";
import {PokemonsService} from "../pokemons/pokemons.service";

@Component({
  selector: 'pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {

  types!: Array<string>;
  @Input() pookemon?: pokemon ; //propriete pour d'entre du composant

  constructor(private router:Router,private pokeservice: PokemonsService) {

  }

  ngOnInit(): void {
    this.types = this.pokeservice.getPokemonsType();
    console.dir(this.types);
    console.dir(this.pookemon);
    //console.log('je suis bien ');
  }

  hasType(type:string): boolean {
    const index = this.pookemon?.types.indexOf(type);
    return (index !== -1) ? true : false ;
  }

  selectType($event:any,type:string): void {
    const checked = $event.target.checked;
    if (checked){
        this.pookemon?.types.push(type);
    }else  {
      const index = this.pookemon?.types.indexOf(type) || -1;
      if (index !== 1 ){
        this.pookemon?.types.splice(index ,1);
      }
    }

  }
  //redirection apres la modification
  onsubmit(): void {
    console.log('submit form!');
    this.pokeservice.updatePokemon(this.pookemon!)
      .subscribe(() => this.goBack());
  }
  goBack():void{
    const link =['/pokemon',this.pookemon?.id] ;
    this.router.navigate(link);
  }
  isTypesValid(type: string): boolean {
    if (this.pookemon?.types.length === 1 &&
      this.hasType(type)) {
      return false;
    }

    if (this.pookemon!.types.length >= 3 &&
      !this.hasType(type)){
      return false;
    }

    return true;
  }
}
