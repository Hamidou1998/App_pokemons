import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/AuthService";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username!:string;
  password!:string;
  message!:string;

  constructor(
              private service:AuthService,
              public router: Router,
          ) { }

  ngOnInit(): void {
  }
  connecter(){
    this.service.login(this.username,this.password).subscribe( result => {
     // console.log(result);
      if(result){
        this.router.navigate(['/pokemons']);
      }
      else
      {
        Swal.fire("Connexion refuser ","Veillez ressayer!");
        this.router.navigate(['pokemons/login']);
      }
    });
  }
  goback(){
    this.router.navigate(['pokemons/login']);
  }

  SetMessage(){
    this.message = this.service.isLoggedIn ?
      'Vous etes connecté.' : 'Identifiant ou mots de passe incorrect!';
  }
}
