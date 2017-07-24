import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ AuthenticationService ]
})

export class HomeComponent implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

  newUser(email: string, password: string, name: string) {
    this.authService.createUser(email, password, name);
  }

  loginUser(email: string, password: string) {
    this.authService.loginUser(email, password);
  }
}
