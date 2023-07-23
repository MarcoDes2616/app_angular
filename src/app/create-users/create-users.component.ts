import { Component } from '@angular/core';
import {User} from './user.model'

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent {
  users: User[] = [new User("Marco", "Cardenas"), new User("Lucas", "Cardenas")]

  nombreI:string = ""
  apellidoI:string = ""

  agregarUsuario(){
    let usuario = new User(this.nombreI, this.apellidoI)

    this.users.push(usuario)
    this.nombreI = ""
    this.apellidoI = ""
  }

  ingresarUsuarion(user: User){
    this.users.push(user)
  }

}
