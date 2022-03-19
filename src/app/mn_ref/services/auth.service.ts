import { HttpClient } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable, of as observableOf } from "rxjs";
import { delay } from "rxjs/operators";

import { SessionService } from "./session.service";

@Injectable()
export class AuthService {
  // Assuming this would be cached somehow from a login call.
  // public authTokenStale: string = "";
  public authTokenNew: string = "new_auth_token";
  // public currentToken: string;

  constructor(private http: HttpClient, private injector: Injector) {
    // this.currentToken = this.authTokenStale;
  }

  getAuthToken() {
    // if (!this.currentToken) {
    const ss = this.injector.get(SessionService);
    //this.currentToken = ss.getAuthToken();
    // }
    return ss.getAuthToken();
  }

  getVirtualViewId() {
    // if (!this.currentToken) {
    const ss = this.injector.get(SessionService);
    //this.currentToken = ss.getAuthToken();
    // }
    let c = ss.getSessionVirtualViewId();
    if (c) {
      return c.id;
    } else {
      return 0;
    }
  }

  refreshToken(): Observable<string> {
    /*
            The call that goes in here will use the existing refresh token to call
            a method on the oAuth server (usually called refreshToken) to get a new
            authorization token for the API calls.
        */

    // this.currentToken = this.authTokenNew;

    // Just to keep HttpClient from getting tree shaken.
    // this.http.get(
    //   "http://private-4002d-testerrorresponses.apiary-mock.com/getData"
    // );

    return observableOf(this.authTokenNew).pipe(delay(200));
  }
}
