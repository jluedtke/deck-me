import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [ AuthenticationService ]
})
export class UserProfileComponent implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

  updateUser(update: string) {
    this.authService.updateUsername(update);
  }

  updateEmail(update: string) {
    this.authService.updateEmail(update);
  }
}
