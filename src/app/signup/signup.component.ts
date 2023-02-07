import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private router:Router, private httpclient: HttpClient){}

  myFunction(){
    const password:any= document.getElementById("password");
    if( password.type === "password"){
      password.type= "text" ;
    }
    else{
      password.type= "password";
    }
  }

  onSubmit(Name:any,Password:any){
    const data={
      userName:Name,
      userPassword:Password
    }
    this.httpclient.post<any>("http://localhost:8011/api/userlogin/",data).subscribe(response =>{
      alert("login details submitted successfully");
      this.router.navigate(['userlogin']);
    },error =>{
      alert("something went wrong");
    })
  }

}
