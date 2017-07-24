import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service'; //import service
import { AuthGaurdService } from './auth-gaurd.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ AuthenticationService ]
})
export class AppComponent {

  user; //provided by service
  private isLoggedIn: boolean;

  constructor(public authService: AuthenticationService, public authGaurd: AuthGaurdService, public router: Router) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
        this.router.navigate(['']);
      } else {
        this.isLoggedIn = true;
      }
    })
  }

  logout() {
    this.authService.logout();
  }
}
