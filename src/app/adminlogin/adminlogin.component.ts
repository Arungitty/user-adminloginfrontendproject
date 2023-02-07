import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

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

  checkCredentials(name:any, password:any){
    // length validation
    const pass:any= document.getElementById("password");
    if(pass.value.length<8){
      alert("password length should be greater than 8");
       return;
    }
    else{
      this.httpclient.get<any>("http://localhost:8011/api/adminlogin/").subscribe(response =>{
        const admin=response.find((a:any) => {
          return a.adminName== name && a.adminPassword==password;
        })
        console.log(admin);
        if(admin){
          alert("login successfully");
          this.router.navigate(['userdetails']);
        } else{
          alert("wrong credentials");
        }
      }, error =>{
        alert("something went wrong");
      });

    }

    }

}
