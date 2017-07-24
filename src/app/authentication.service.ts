import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'; //used for user instance
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'; //access to firebase

@Injectable()
export class AuthenticationService {

  user: Observable<firebase.User>; //current logged-in user
  current: Object;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  // login() {
  //   this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  //   //target auth prop from NgAuth, and select popup method sending it a google provider
  // }

  createUser(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
      alert(error.message);
    })
  }

  loginUser(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      alert(error.message);
    })
    this.current = this.afAuth.auth.currentUser;
    console.log(this.current[0].S.email);
  }

  logout() {
    this.afAuth.auth.signOut().catch(function(error) {
      alert(error.message);
    })
  }

}
