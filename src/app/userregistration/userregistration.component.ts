import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent {

  constructor(private service:DataService, private router:Router){}

  // declaration & initialization of objection
  user = {
    email: '',
    name:'',
    contactnumber: '',
  };

  addOn(): void {
    const data = {
      email: this.user.email,
      name: this.user.name,
      contactnumber: this.user.contactnumber,
    };
    // if email will not exist or if user will not fill email in form then it will alert the user
    if (!data.email && !data.name && !data.contactnumber) {
      alert('Please fill all details!');
      return;
    }
    this.service.create(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
        alert("sumit successfully");
        this.router.navigate(['userlogin']);
  }


}


