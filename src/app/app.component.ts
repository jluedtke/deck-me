import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service'; //import service
import { AuthGaurdService } from './auth-gaurd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ AuthenticationService ]
})
export class AppComponent {

  user; //provided by service
  private isLoggedIn: boolean;
  private userName: string;

  constructor(public authService: AuthenticationService, public authGaurd: AuthGaurdService, public router: Router) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    })
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  gotoHome() {
    this.router.navigate(['']);
  }

  gotoDeckBuilder() {
    this.router.navigate(['deckbuilder']);
  }

  gotoAbout() {
    this.router.navigate(['about']);
  }
  gotoProfile() {
    this.router.navigate(['profile']);
  }


}
