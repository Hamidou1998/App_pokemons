import { Component } from '@angular/core';
import {AuthService} from "../shared/AuthService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Application de Pokemons';
  isConnect:Boolean=true;


  constructor(
    private service:AuthService,
  ) { }

  ngOnInit(): void {
    this.isConnect=this.service.isLoggedIn;
    console.log(this.isConnect);
  }
}
