import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'; //used for user instance
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app'; //access to firebase
import { User } from './user.model';
import { FirebaseToAppService } from './firebase-to-app.service';

@Injectable()
export class AuthenticationService {

  user: Observable<firebase.User>; //current logged-in user
  local: Object;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.user = afAuth.authState;
  }

  passwordReset() {
    let email: string = this.afAuth.auth.currentUser.email;
    console.log(email);
    this.afAuth.auth.sendPasswordResetEmail(email);
  }

  passwordResetWithEmail(email: string) {
    this.afAuth.auth.sendPasswordResetEmail(email);
  }

  updateUsername(name: string, photoURL: string = null) {
    this.afAuth.auth.currentUser.updateProfile({displayName: name, photoURL: null});
  }

  updateEmail(email: string) {
    this.afAuth.auth.currentUser.updateEmail(email);
  }

  createUser(email: string, password: string, name: string) {
    let router: Router = this.router;
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(stuff => {
        stuff.updateProfile({displayName: name, photoURL: null});
        stuff.sendEmailVerification();
        router.navigate(['deckbuilder']);
      })
      .catch(error => {
        alert(error.message);
      })
  }

  loginUser(email: string, password: string) {
    let router: Router = this.router;
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(function() {
        router.navigate(['deckbuilder']);
      })
      .catch(error => {
        alert(error.message);
      })
    this.local = this.afAuth.auth.currentUser;
  }

  logout() {
    this.afAuth.auth.signOut().catch(error => {
      alert(error.message);
    })
  }

}
