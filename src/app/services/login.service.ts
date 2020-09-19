import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  signInWithGitHub(): void {
    console.log("placeholder function for logging in with github");
  }
}
