import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'; //canActivate to setup routes rules //import CanActivateChild when needed
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGaurdService implements CanActivate {

  constructor(private router: Router, public authService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.afAuth.authState.take(1).map(authState => !!authState).do(authenticated => {
      if (!authenticated) {
        alert('Please Login');
        this.router.navigate(['']);
        return false;
      } else {
        return true;
      }
    })
  }

  // canActivateChild() {}
}
