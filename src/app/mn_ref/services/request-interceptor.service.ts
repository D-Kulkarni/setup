import {
  HttpErrorResponse,
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpSentEvent,
  HttpUserEvent,
} from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";
import {
  BehaviorSubject,
  Observable,
  throwError as observableThrowError,
} from "rxjs";
import { catchError, tap } from "rxjs/operators";
import * as _ from "underscore";

import { environment } from "../../../environments/environment";
import { AuthService } from "./auth.service";
import { LoaderService } from "./loader.service";
import { SessionService } from "./session.service";

@Injectable()
export class RequestInterceptorService implements HttpInterceptor {
  isRefreshingToken: boolean = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  successHTTPCodes = [200, 201];
  loaderCount = 0;

  constructor(
    private injector: Injector,
    private router: Router,
    public loaderService: LoaderService,
    private ss: SessionService
  ) {}

  addToken(
    req: HttpRequest<any>,
    //    token: string,
    authService,
    virtualviewId
  ): HttpRequest<any> {
    let token = "";
    if (
      req.url.indexOf("/assets/") <= -1 &&
      req.url.indexOf("http") <= -1 &&
      req.url.indexOf("/common/gallery/") <= -1
    ) {
      token = authService.getAuthToken();
      if (!virtualviewId) {
        virtualviewId = "0";
      }
      let c = req.clone({
        setHeaders: {
          Authorization: "Bearer " + token,
          virtualview: virtualviewId,
        },
        url: environment.API_BASE + req.url,
      });
      return c;
    } else {
      return req.clone({ setHeaders: { Authorization: "Bearer " + token } });
    }
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<
    | HttpSentEvent
    | HttpHeaderResponse
    | HttpProgressEvent
    | HttpResponse<any>
    | HttpUserEvent<any>
  > {
    const authService = this.injector.get(AuthService);
    let vid = authService.getVirtualViewId();
    if (vid === undefined) {
      vid = 0;
    }
    let c = this.addToken(req, authService, vid.toString());
    //c.headers.set("virtualview", vid.toString());
    //c. = new HttpHeaders();

    this.handleLoader("ADD");

    return next.handle(c).pipe(
      tap((evt) => {
        if (evt instanceof HttpResponse) {
          if (_.contains(this.successHTTPCodes, evt.status)) {
            this.handleLoader("REMOVE");
          }
        }
      }),
      catchError((error) => {
        this.handleLoader("REMOVE");
        if (error instanceof HttpErrorResponse) {
          switch ((<HttpErrorResponse>error).status) {
            case 400:
              return this.handle400Error(error);
            case 401:
              this.loaderCount = 0;
              this.loaderService.stopLoader();
              this.ss.flushSession();
              return this.handle401Error(req, next);
            default:
              return observableThrowError(error);
          }
        } else {
          return observableThrowError(error);
        }
      })
    );
  }

  handleLoader(type) {
    if (type === "ADD") {
      this.loaderService.startLoader();
      this.loaderCount++;
    } else {
      this.loaderCount--;
    }

    if (this.loaderCount <= 0) {
      this.loaderService.stopLoader();
    }
  }

  handle400Error(error) {
    if (
      error &&
      error.status === 400 &&
      error.error &&
      error.error.error === "invalid_grant"
    ) {
      // If we get a 400 and the error message is 'invalid_grant', the token is no longer valid so logout.
      return this.logoutUser();
    }

    return observableThrowError(error);
  }

  handle401Error(req: HttpRequest<any>, next: HttpHandler) {
    return this.logoutUser();
    // if (!this.isRefreshingToken) {
    //   this.isRefreshingToken = true;

    //   // Reset here so that the following requests wait until the token
    //   // comes back from the refreshToken call.
    //   this.tokenSubject.next(null);

    //   const authService = this.injector.get(AuthService);

    //   return authService.refreshToken().pipe(
    //     switchMap((newToken: string) => {
    //       if (newToken) {
    //         this.tokenSubject.next(newToken);
    //         return next.handle(
    //           this.addToken(this.getNewRequest(req), newToken)
    //         );
    //       }

    //       // If we don't get a new token, we are in trouble so logout.
    //       return this.logoutUser();
    //     }),
    //     catchError(error => {
    //       // If there is an exception calling 'refreshToken', bad news so logout.
    //       return this.logoutUser();
    //     }),
    //     finalize(() => {
    //       this.isRefreshingToken = false;
    //     })
    //   );
    // } else {
    //   return this.tokenSubject.pipe(
    //     filter(token => token != null),
    //     take(1),
    //     switchMap(token => {
    //       return next.handle(this.addToken(this.getNewRequest(req), token));
    //     })
    //   );
    // }
  }

  /*
        This method is only here so the example works.
        Do not include in your code, just use 'req' instead of 'this.getNewRequest(req)'.
    */
  getNewRequest(req: HttpRequest<any>): HttpRequest<any> {
    if (req.url.indexOf("getData") > 0) {
      return new HttpRequest("GET", "url");
    }

    return new HttpRequest("GET", "url");
  }

  logoutUser() {
    // Route to the login page (implementation up to you)
    this.router.navigate(["login"]);
    return observableThrowError("");
  }
}
