import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./AuthService";
import {Injectable} from "@angular/core";


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }
    return false;
  }
}
