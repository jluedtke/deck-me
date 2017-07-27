import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [ AuthenticationService ]
})
export class UserProfileComponent implements OnInit {

  email: string;
  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
    this.email = this.authService.afAuth.auth.currentUser.email;
  }

  updateUser(update: string) {
    this.authService.updateUsername(update);
    alert("Username Updated");
  }

  updateEmail(update: string) {
    this.authService.updateEmail(update);
    alert("Email Updated");
  }

  passwordReset() {
    this.authService.passwordReset();
    alert("Password-Reset Email Sent");
  }
}
