import {InMemoryDbService} from "angular-in-memory-web-api";
import {pokemon} from "../model/pokemon";
import {POKEMONS} from "./list.pokemons";


export class InMemoryDBService implements InMemoryDbService {

  createDb()  {
    let pokemons = POKEMONS;

    return { pokemons };
  }
}
