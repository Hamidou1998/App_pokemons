import {Observable, of} from "rxjs";
import {delay, tap} from "rxjs/operators";


export class AuthService {

  isLoggedIn :Boolean=false;

  constructor() {
  }

  login(name: string, password: string) :Observable<boolean> {
    const isLoggedn = (name === 'hamid' && password === 'hamid');
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = isLoggedn)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
