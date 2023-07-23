import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form.html',
  // styleUrls: ['./calculadora.component.css']
})


export class FormCalcComponent {
    a: number;
    b: number;
    
    @Output() result:EventEmitter<number> = new EventEmitter<number>()

//   resultado: number = 0;
  sumar() {
    let resultado = this.a + this.b;
    this.result.emit(resultado)
  }
}
