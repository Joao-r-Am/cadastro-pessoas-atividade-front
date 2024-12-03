import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../login.service';

export class NotAuthenticatedUser implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}
  canActivate() {
    if (this.loginService.loggedIn) {
      console.log(this.loginService.loggedIn);

      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
