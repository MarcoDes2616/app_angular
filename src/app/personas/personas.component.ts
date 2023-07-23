import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css'] 
})
export class PersonasComponent{
    deshabilitar = false
    mensaje = ""
    titulo = "Ingeniero"
    mostrar = false

    agregar_usuario(){
        this.mostrar = true
        this.mensaje = "Usuario Agregado"
    }

    // modificar_titulo(event:Event){
    //     this.mostrar = false
    //     this.titulo = (<HTMLInputElement>event.target).value
    // }


}