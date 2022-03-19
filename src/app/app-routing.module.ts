import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './registration/login/login.component';
import { SignUpComponent } from './registration/sign-up/sign-up.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {
    path:'', pathMatch:'full', redirectTo:'/sign-up'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }