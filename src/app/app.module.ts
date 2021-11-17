  import {Injectable, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PokemonsModule} from "./pokemons/pokemons.module";
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';
import { HttpClientModule } from '@angular/common/http';
  import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
  import {InMemoryDBService} from "../shared/InMemoryDBService";
  import {AuthGuard} from "../shared/AuthGuard";
  import {AuthService} from "../shared/AuthService";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PokemonsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDBService, {dataEncapsulation: false})
  ],
  providers: [AuthGuard,AuthService],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
