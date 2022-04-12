import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './registration/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { JwtModule } from '@auth0/angular-jwt';
import { SignUpComponent } from './registration/sign-up/sign-up.component';
import { AuthInterceptorInterceptor } from './core/auth-interceptor.interceptor';
export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({positionClass: 'toast-bottom-center',
    preventDuplicates: true,}),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["http://localhost:4200","http://localhost:5000"],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
    
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
