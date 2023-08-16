import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../user.model';
import { DataServices } from '../data.services';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  //   styleUrls: ['./create-users.component.css']
})
export class FormComponent implements OnInit {
  idSelected:number
  // @Output() usuarioCreado: EventEmitter<User> = new EventEmitter<User>()
  constructor(private dataServices:DataServices){
    
  }
    
  ngOnInit(): void {
    this.dataServices.userSelected$.subscribe(({ user, index }) => {
      this.nombreI = user.nombre
      this.apellidoI = user.apellido
      this.idSelected = index
    });
  }

  nombreI: string = '';
  apellidoI: string = '';

  agregarUsuario() {
    console.log(this.idSelected);
    
    let usuario = new User(this.nombreI, this.apellidoI);
    if(this.idSelected){
      this.dataServices.updateUser(this.idSelected, usuario)
    } else {
      this.dataServices.newUser(usuario)
    }
    this.nombreI = '';
    this.apellidoI = '';
  }
}
