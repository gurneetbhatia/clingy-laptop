import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
              private auth: AngularFireAuth) { }

  signInWithGitHub(): Promise<any> {
    return this.auth.signInWithPopup(new auth.GithubAuthProvider());
  }
}
