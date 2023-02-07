import { Component } from '@angular/core';
import {DataService} from 'src/app/data.service';
import {OnInit} from '@angular/core';
import { UserClass } from 'src/UserClass';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private service: DataService){}

  users:UserClass[];

  ngOnInit(): void {
    this.service.getAllUser().subscribe(result => this.users= result);
    console.log(this.users);
  }



}
