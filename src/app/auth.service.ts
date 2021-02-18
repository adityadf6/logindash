import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  username: Observable<firebase.default.User | null>


  constructor(private afAuth : AngularFireAuth) {

    this.username = afAuth.authState


  }


  login() {


    this.afAuth.signInWithRedirect(new firebase.default.auth.GoogleAuthProvider)

  }

  logout() {

    this.afAuth.signOut()


  }

}
