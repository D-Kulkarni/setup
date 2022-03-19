import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

import { AuthJWTService } from "./auth-jwt.service";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthJWTService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }
}
