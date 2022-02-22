import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userList:any;
  constructor() { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(){
    this.userList = [
      {id:1,name:'Sajjad',email:'sajjad@gmail.com',mobileNo:9939319722},
      {id:1,name:'Nazeer',email:'nazeer@gmail.com',mobileNo:989898986},
      {id:1,name:'Ramesh',email:'ramesh@gmail.com',mobileNo:879798798},
    ]
  }
}
