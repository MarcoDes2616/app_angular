import { Component, OnInit } from '@angular/core';
import { Movimiento } from './movimiento.model';
import { deleteMov } from './delete.model';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  // styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent implements OnInit{
    egresos:Movimiento[] = [ new Movimiento("Telefono celular", 450), new Movimiento("Pago de renta hogar", 250)]
    ingresos:Movimiento[] = [ new Movimiento("Sueldo/Salario", 1500), new Movimiento("Venta de articulos varios", 850)]
    totalEgreso:number;
    totalIngreso:number;
    porcentualEgreso:number;
    
    ngOnInit(){
      this.calculoEgresos()
      this.calculoIngresos()
      this.calculoPorcentual()
    }

    calculoPorcentual(){
      if(this.totalIngreso > 0){
        this.porcentualEgreso = (this.totalEgreso / this.totalIngreso * 100)
      } else {
        this.porcentualEgreso = 0
      }
    }
    
    calculoEgresos(){
      let resultado = 0
      this.egresos.forEach(item => {
        resultado += item.monto
      })
      this.totalEgreso = resultado
    }

    calculoIngresos(){
      let resultado = 0
      this.ingresos.forEach(item => {
        resultado += item.monto
      })
      this.totalIngreso = resultado
    }

    deleteIngreso(data:deleteMov){
      this.ingresos.splice(data.index, 1)
      this.calculoIngresos()
      this.calculoPorcentual()
    }
}
