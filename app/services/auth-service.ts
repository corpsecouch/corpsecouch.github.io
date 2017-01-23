// reference: https://medium.com/@blacksonic86/angular-2-authentication-revisited-611bf7373bf9#.n50a6lu44

import { Injectable }     from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class AuthService {

  private endpoint:string = 'https://api-skullnbones.rhcloud.com/portfolio/auth';
  private loggedIn:boolean = false;

  constructor(private http:Http){
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  public login(password:string){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        this.endpoint,
        JSON.stringify({ password }),
        { headers }
      )
      .map((res:Response) => res.json())
      .map((res:any) => {
        if(res.success){
          localStorage.setItem('auth_token', res.auth_token);
          this.loggedIn = true;
        }
        return res.success;
      })
  }

  public logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  public isLoggedIn() {
    return this.loggedIn;
  }

}
