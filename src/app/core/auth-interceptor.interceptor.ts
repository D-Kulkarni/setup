import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError  } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor() {}
  addToken(req: HttpRequest<any>): HttpRequest<any> {
   
    
    if (req.url.indexOf('/assets/') <= -1) {
   const url = environment.baseURL + req.url;
   const authToken = localStorage.getItem("AUTH_TOKEN");
     
      const urlReq = req.clone({
        setHeaders: {  Authorization: 'Bearer ' + authToken },
        url: url,
      });
     
       return urlReq;
    } 
    else 
    {
       const authToken = localStorage.getItem("AUTH_TOKEN");
 
      return req.clone({
        setHeaders: { Authorization: 'Bearer ' + authToken ,
         'content-type': 'application/json'
         },
      });
    }
  }

  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req =  this.addToken(request);
    return next.handle(req).pipe(catchError ((err:HttpErrorResponse) => {
     
      if ([401, 403].indexOf(err.status) !== -1) {
        
          // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          // this.ss.flushSession();
          // this.SubjectService.isLoggedIn.next(false);
          // this.router.navigate(['/sign-in']);
         
      }
      if(err.status == 404) {
        return throwError(err);
      }

      const error = err.error.message || err.statusText || err.status;
     
      return throwError(error);
  }))
  }
  }

