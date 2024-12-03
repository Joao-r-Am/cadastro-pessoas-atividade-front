import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedUser implements CanActivate {
  constructor(private usuarioService: LoginService, private router: Router) {}
  canActivate() {
    console.log(this.usuarioService.loggedIn);
    if (this.usuarioService.loggedIn) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}
