import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { _environment as env } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  signInWithGitHub(): Observable<any> {
    return this.http.get("https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/authorize?scope=user:email&client_id="+env.github_client_id);
  }
}
