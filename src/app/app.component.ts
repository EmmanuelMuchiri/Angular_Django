import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ApiService } from './api.service';
import { User } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  users: User[];

  constructor(public apiservice: ApiService) {

  }

  ngOnInit() 
  {

  //   console.log(this.apiservice.getUsers()
  //     .subscribe(data => this.users = data));

  }


}