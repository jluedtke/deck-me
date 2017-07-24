import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'; //used for user instance
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'; //access to firebase

@Injectable()
export class AuthenticationService {

  user: Observable<firebase.User>; //current logged-in user
  local: Object;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  passwordReset(email: string) {
    this.afAuth.auth.sendPasswordResetEmail(email);
  }

  updateUsername(name: string, photoURL: string = null) {
    this.afAuth.auth.currentUser.updateProfile({displayName: name, photoURL: null});
  }

  updateEmail(email: string) {
    this.afAuth.auth.currentUser.updateEmail(email);
  }

  createUser(email: string, password: string, name: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(function(stuff) {
        stuff.updateProfile({displayName: name, photoURL: null});
        stuff.sendEmailVerification();
      })
      .catch(function(error) {
        alert(error.message);
      })
  }

  loginUser(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      alert(error.message);
    })
    this.local = this.afAuth.auth.currentUser;
  }

  logout() {
    this.afAuth.auth.signOut().catch(function(error) {
      alert(error.message);
    })
  }

}
