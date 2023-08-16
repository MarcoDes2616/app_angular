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

  constructor(private dataServices:DataServices ){
    // dataServices.updateUser.subcribe()
  }
    
  ngOnInit(): void {

    this.dataServices.getUsers()
      .subscribe({
        next: (res:User[]) => {
          this.users = res
          this.dataServices.setUsers(res)
        }
      })
      this.dataServices.userUpdated$.subscribe(() => {
        this.dataServices.getUsers().subscribe({
          next: (res) => this.users = res
        })
      });
    
  }

  ingresarUsuario(user: User){
    this.dataServices.newUser(user)
  }

}
