import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListPokemonComponent} from "./list-pokemon/list-pokemon.component";
import {DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {PokemonEditComponent} from "./pokemon-edit/pokemon-edit.component";
import {AuthGuard} from "../shared/AuthGuard";
import {LoginComponent} from "./login/login.component";

// routes
const appRoutes: Routes = [

  { path:'pokemons/login',component: LoginComponent },
  { path: 'pokemons', component: ListPokemonComponent,canActivate:[AuthGuard] },
  { path: 'pokemon/:id', component: DetailPokemonComponent,canActivate:[AuthGuard] },
  { path: 'pokemon/edit/:id', component: PokemonEditComponent,canActivate:[AuthGuard] },
  { path: '', redirectTo: 'pokemons/login', pathMatch: 'full' },
  { path:'**',component:PageNotFoundComponent,canActivate:[AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
