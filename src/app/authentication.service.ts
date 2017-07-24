import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'; //used for user instance
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'; //access to firebase

@Injectable()
export class AuthenticationService {

  user: Observable<firebase.User>; //current logged-in user

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    //target auth prop from NgAuth, and select popup method sending it a google provider
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
