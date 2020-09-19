import { Component, OnInit } from '@angular/core';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  signInWithGitHub(): void {
    this.loginService.signInWithGitHub()
      .then(
        (_succ) => {
          console.log(_succ);
        }
      ).catch(
        (_err) => {
          console.log(_err);
        }
      )
  }

}
