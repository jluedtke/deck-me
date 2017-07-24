import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'; //used for user instance
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'; //access to firebase
import { User } from './user.model';

@Injectable()
export class AuthenticationService {

  user: Observable<firebase.User>; //current logged-in user
  localUser: Object;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  createUser(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
      alert(error.message);
    })
  }

  loginUser(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      alert(error.message);
    })
    this.localUser = this.afAuth.auth.currentUser;
  }

  logout() {
    this.afAuth.auth.signOut().catch(function(error) {
      alert(error.message);
    })
  }

}
