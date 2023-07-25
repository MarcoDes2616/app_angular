import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Movimiento } from "../movimiento.model";
import { deleteMov } from "../delete.model";

@Component({
    selector: 'app-ingresos',
    templateUrl: './ingresos.html',
    // styleUrls: ['./calculadora.component.css']
  })


export class IngresosComponent{
  // @Input() moviIn:Movimiento;
  // @Input() index:number;
  @Input() ingresos:Movimiento[];
  @Output() delete:EventEmitter<deleteMov> = new EventEmitter<deleteMov>

  reportarIndice(i:number){
    let deleteM = new deleteMov("ingresos", i)
    this.delete.emit(deleteM)
  }
}