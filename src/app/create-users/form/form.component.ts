import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../user.model';
// import { User } from '../user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  //   styleUrls: ['./create-users.component.css']
})
export class FormComponent {
  
  @Output() usuarioCreado: EventEmitter<User> = new EventEmitter<User>()
  
  nombreI: string = '';
  apellidoI: string = '';

  agregarUsuario() {
    let usuario = new User(this.nombreI, this.apellidoI);

    
    this.usuarioCreado.emit(usuario)
    this.nombreI = '';
    this.apellidoI = '';
  }
}
