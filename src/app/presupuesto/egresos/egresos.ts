import { Component, Input } from '@angular/core';
import { Movimiento } from '../movimiento.model';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.html',
  // styleUrls: ['./calculadora.component.css']
})


export class EgresosComponent {
  @Input() moviEg:Movimiento;
  @Input() index:number;
}
