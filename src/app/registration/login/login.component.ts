import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationService } from '../../core/location.service';
import { NotificationService } from '../../core/notification-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public invalidLogin: boolean = false;
  allCountriesList!:any[] ;
  statesByCountryList!:any[] ;
  countryCode!:string;
  stateCode!:string;
  cityList!:any[];
  constructor(private http:HttpClient,private router:Router,private notification: NotificationService,private  locationService:LocationService) { }

  ngOnInit(): void {
    this.allCountriesList = this.locationService.getAllCountries();
   let data =  this.allCountriesList
      data.forEach((item:any,index)=>{
        // if(item.name == 'India'){
        //   console.log('index',index);
        //   data.splice(100,1)
        //   data.splice(0,0,item);
          
         
        // }
        if(item.name == 'United States'){
          console.log('index',index);
          data.splice(229,1)
          data.splice(0,0,item);
          
         
        }
        if(item.name == 'India'){
          console.log('index',index);
          data.splice(100,1)
          data.splice(0,0,item);
          
         
        }
      })
  this.allCountriesList = data;
  console.log(this.allCountriesList);
  
    
  }
  selectedCountry(data:any) {
  console.log('countrycode',data);
  
    this.countryCode = data.target.value;
    this.getStateByCountry();

  }

  selectedState(data:any) {
    console.log('data',data);
    
    this.stateCode = data.target.value;
    this.getCityByCountryAndState()

  }

  getStateByCountry() {
    this.statesByCountryList = this.locationService.getStateByCountry(this.countryCode);
    
  }
  getCityByCountryAndState() {
    this.cityList = this.locationService.getCitiesByState(this.countryCode, this.stateCode);
    
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
