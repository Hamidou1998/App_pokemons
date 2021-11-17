import { Injectable } from '@angular/core';
import {pokemon} from "../../model/pokemon";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private pokemonurl= 'api/pokemons';
  constructor(private http:HttpClient) { }


 /* sans l'utilisation de l'api
 getListPokemons():pokemon[]{
    return POKEMONS;
  }
  getSinglePoken(id:number): pokemon | undefined {
    return  this.getListPokemons().find( e => e.id == id )
  }*/

  /* recuperer le type d'un pokemon */
  getPokemonsType(): string [] {
      return ['Planete','Feu','Eau','insecte','Normal','Electrik','Poison','Fee','vol'];
  }

  /* utilisation des service */

  getListPokemons(): Observable<pokemon[]>{
    return this.http.get<pokemon[]>(this.pokemonurl).pipe(
      tap( next=> console.log('Fetched pokemon')),
      catchError(this.handleError('getListPokemons',[]))
    );
  }

  getSinglePokemon(id: number) : Observable<pokemon> {
    const url = `${this.pokemonurl}/${id}`;
    console.log(url);
    return this.http.get<pokemon>(url).pipe(
      tap( next=> console.log('Fetched pokemon by id=${id}')),
      catchError(this.handleError<pokemon>('getListPokemons id=${id}'))
    )
  }
   private handleError<T>(operation= 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log('${operation} failed:${error.message}');
      return of(result as T);
    };
  }
  updatePokemon(pokemon: pokemon): Observable<pokemon>{
    const httpOptions = {
    headers: new HttpHeaders({'content-type':'application/json'})
    };
    //on ajoute ensuite cette entete à la requete
    return this.http.put(this.pokemonurl, pokemon, httpOptions).pipe(
      catchError(this.handleError<any>('update Pokemon')),
      tap(next => console.log('Update Pokemon id=${pokemon.id}'))
    );
  }

  deletePokemon(pokemon: pokemon): Observable<pokemon> {
    const url = `${this.pokemonurl}/${pokemon.id}`;
    console.log("je suis bien ici"+pokemon.id);

    const httpoptions = {
      headers: new HttpHeaders({ 'Content-Type':'application/json' })
    };
     return this.http.delete<pokemon>(url,httpoptions).pipe(
      tap( _ => console.log(`Deleted pokemon id=${pokemon.id}`),
        catchError(this.handleError<pokemon>('delete pokemon'))
    ));
  }
}
