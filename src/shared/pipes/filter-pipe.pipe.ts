import { Pipe, PipeTransform } from '@angular/core';
import {pokemon} from "../../model/pokemon";

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(ListPokemon: pokemon[], searchText: string): any[] {
    if (!ListPokemon) {
      return [];
    }
    if (!searchText) {
      return ListPokemon;
    }
    searchText = searchText.toUpperCase().trim();
    return ListPokemon.filter(pokemon => {
        return pokemon.name.toUpperCase().includes(searchText);
     // return pokemon.includes(searchText);
    });
  }
}
