import { Component, OnInit} from '@angular/core';
import {User} from './user.model'
import { DataServices } from './data.services';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css'],
  providers: [DataServices]
})
export class CreateUsersComponent implements OnInit {
  users:User[] = [] 

  constructor(private dataServices:DataServices ){}
    
  ngOnInit(): void {
    this.users = this.dataServices.users
  }

  ingresarUsuario(user: User){
    this.dataServices.newUser(user)
  }

}
