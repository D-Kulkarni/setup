import { Injectable } from "@angular/core";

import { SessionService } from "./session.service";

@Injectable()
export class AuthJWTService {
  constructor(private ss: SessionService) {}
  // ...
  public isAuthenticated(): boolean {
    let r = this.ss.isValidSession2();
    if (r) {
      return true;
    } else {
      this.ss.flushSession();
      return false;
    }
  }
}
