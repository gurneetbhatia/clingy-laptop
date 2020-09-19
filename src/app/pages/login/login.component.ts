import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,
              private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  signInWithGitHub(): void {
    this.auth.signInWithPopup(new auth.GithubAuthProvider());
  }

}
