import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../core/notification-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public invalidRegister = false;
  constructor(private router: Router, private http: HttpClient, private notification: NotificationService) { }

  ngOnInit(): void {
  }


  signUp(form:NgForm) {
    const registerModel = JSON.stringify(form.value);

    this.http.post("authenticate/register",
      registerModel
    ).subscribe({
      next: () => {
        this.invalidRegister = false;
        this.notification.showSuccess("New user registered successfully", "Success")
        this.router.navigate(["/login"]);
      },
      error: (err) => {
        this.notification.showError("User already exists / register user failed", "Error")
        console.error(err)
        this.invalidRegister = true;
      },
      complete: () => console.info('Register complete')
    });
  }

}
