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
      .subscribe(
        (succ) => {
          console.log(succ);
          console.log("here")
        },
        (err) => {
          console.log(err);
        }
      )
  }

}
