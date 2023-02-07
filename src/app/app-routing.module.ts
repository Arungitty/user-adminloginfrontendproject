import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import {UserdetailsComponent} from './userdetails/userdetails.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import {UserregistrationComponent} from './userregistration/userregistration.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {"path":"userlogin", component:UserloginComponent},
  {"path":"userdetails", component:UserdetailsComponent},
  {"path":"adminlogin", component:AdminloginComponent},
  {"path":"userregistration", component:UserregistrationComponent},
  {"path":"", redirectTo:"userlogin", pathMatch:"full"},
  {"path":"signup", component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
