import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movimiento } from '../movimiento.model';
import { deleteMov } from '../delete.model';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.html',
  // styleUrls: ['./calculadora.component.css']
})


export class EgresosComponent {
  @Input() egresos:Movimiento[];
  @Input() totalIngreso:number;
  @Output() delete:EventEmitter<deleteMov> = new EventEmitter<deleteMov>

  reportarIndice(i:number){
    let deleteM = new deleteMov("egresos", i)
    this.delete.emit(deleteM)
  }

  calculoPorcentualMov(monto:number){
    return (monto / this.totalIngreso * 100).toFixed(0)
  }
}
