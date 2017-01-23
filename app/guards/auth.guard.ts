// reference: https://medium.com/@blacksonic86/angular-2-authentication-revisited-611bf7373bf9#.n50a6lu


import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth-service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService) {}

  canActivate() {
    return this.auth.isLoggedIn();
  }
}
