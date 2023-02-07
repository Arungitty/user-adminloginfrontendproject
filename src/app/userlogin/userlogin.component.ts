import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Router} from '@angular/router'
import { UserClass } from 'src/UserClass';
import { DataService } from '../data.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  UserClass: any;

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

  //property for loginForm
  // public loginForm:FormGroup;

  ngOnInit(): void {}
 
// data we are getting from get function through http call will return a type list, that's why response variable is a arraylist
// here find is a method of array
 // here a is a object because inside arraylist we stored object in spring boot backend code
 // the value we get from backend it will store in response variable with the help of subscribe function
  checkCredentials(name:any, password:any){
    this.httpclient.get<any>("http://localhost:8011/api/userlogin/").subscribe(response =>{
      const user=response.find((a:any) => {
        return a.userName === name && a.userPassword==password;
      });
      console.log(user);
      if(user){
        alert("login successfull");
        this.router.navigate(['userregistration']);
        // data.value="";
      }
      else{
        alert("please sign up first");
      }

    }, error =>{
      alert("something went wrong");
    })

  }


}
