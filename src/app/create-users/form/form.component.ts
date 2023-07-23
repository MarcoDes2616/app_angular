import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../user.model';
import { DataServices } from '../data.services';
// import { User } from '../user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  //   styleUrls: ['./create-users.component.css']
})
export class FormComponent {
  
  // @Output() usuarioCreado: EventEmitter<User> = new EventEmitter<User>()
  constructor(private dataServices:DataServices){
    this.dataServices.saludar.subscribe(
      (nombre:string) => alert(nombre + " te está saludando")
    )
  }

  nombreI: string = '';
  apellidoI: string = '';

  agregarUsuario() {
    let usuario = new User(this.nombreI, this.apellidoI);
    this.dataServices.newUser(usuario)
    
    // this.usuarioCreado.emit(usuario)
    this.nombreI = '';
    this.apellidoI = '';
  }
}
