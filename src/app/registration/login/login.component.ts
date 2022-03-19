import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NotificationService } from '../../core/notification-service.service';
import { environment } from '../../../environments/environment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public invalidLogin: boolean = false;

  constructor(private http:HttpClient,private router:Router,private notification: NotificationService) { }

  ngOnInit(): void {
  }


  login(form: NgForm) {
    const credentials = JSON.stringify(form.value);

    this.http.post("authenticate/login",
      credentials
    ).subscribe({
      next: (response) => {
        this.notification.showSuccess("User login successful", "Success")
        const token = (<any>response).token;
        const refreshToken = (<any>response).refreshToken;
        localStorage.setItem("accessToken", token);
        localStorage.setItem("refreshToken", refreshToken);
        this.invalidLogin = false;
        this.router.navigate(["/"]);
      },
      error: (err) => {
        this.notification.showError("Invalid username or password.", "Error")
        console.error(err)
        this.invalidLogin = true;
      },
      complete: () => console.info('Login complete')
    });
  }

}
