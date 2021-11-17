import {Injectable, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {ListPokemonComponent} from "../list-pokemon/list-pokemon.component";
import {DetailPokemonComponent} from "../detail-pokemon/detail-pokemon.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {PokemonTypeColorPipe} from "../../shared/pipes/pokemon-type-color.pipe";
import {FormsModule} from "@angular/forms";
import {BorderCardDirective} from "../../shared/directives/border-card.directive";
import {PokemonFormComponent} from "../pokemon-form/pokemon-form.component";
import {FilterPipePipe} from "../../shared/pipes/filter-pipe.pipe";
import { LoaderCompomentComponent } from './loader-compoment/loader-compoment.component';
import {LoginComponent} from "../login/login.component";
import {PokemonEditComponent} from "../pokemon-edit/pokemon-edit.component";
import {AuthService} from "../../shared/AuthService";


@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    PageNotFoundComponent,
    PokemonTypeColorPipe,
    BorderCardDirective,
    PokemonFormComponent,
    PokemonEditComponent,
    FilterPipePipe,
    LoginComponent,
    LoaderCompomentComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
  ListPokemonComponent,
  DetailPokemonComponent,
  PageNotFoundComponent,
    BorderCardDirective,
    PokemonFormComponent,
    FilterPipePipe,
    LoginComponent,
    PokemonEditComponent
]
})
export class PokemonsModule { }
