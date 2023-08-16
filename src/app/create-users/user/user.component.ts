import { Component, EventEmitter, Input } from '@angular/core';
import { User } from '../user.model';
import { DataServices } from '../data.services';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
//   styleUrls: ['./create-users.component.css']
})
export class UserComponent {
  @Input() user: User;
  @Input() i:number;
  // userUpdated$ = this.userUpdatedSource.asObservable();

  constructor(private dataServices:DataServices){}

  emitirSaludo(){
    this.dataServices.saludar.emit(this.user.nombre)
  }

  userSelected(){
    this.dataServices.userSelected(this.user, this.i)
  }
}