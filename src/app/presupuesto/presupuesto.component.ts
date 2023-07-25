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
    tipo:string = "ingreso" 
    
    ngOnInit(){
      // this.calculoEgresos()
      // this.calculoIngresos()
      // this.calculoPorcentual()
    }

    calculoPorcentual(){
      const e = this.calculoEgresos()
      const i = this.calculoIngresos()
      let result
      if(i > 0){
        result = (e / i)
      } else {
        result = 0
      }
      return result
    }
    
    calculoEgresos(){
      let resultado = 0
      this.egresos.forEach(item => {
        resultado += item.monto
      })
      return resultado;
    }

    calculoIngresos(){
      let resultado = 0
      this.ingresos.forEach(item => {
        resultado += item.monto
      })
      return resultado;
    }

    deleteMovimiento(data:deleteMov){
      if(data.tipo == "ingresos"){
        this.ingresos.splice(data.index, 1)
      } else {
        this.egresos.splice(data.index, 1)
      }
    }

    setTipo(tipo:any){
      this.tipo = tipo.target.value
    }

    newMovimiento(descripcion:HTMLInputElement, monto:HTMLInputElement){

      let movimiento = new Movimiento(descripcion.value, parseFloat(monto.value))
      if(movimiento.descripcion && movimiento.monto){
        if(this.tipo == "ingreso"){
          this.ingresos.push(movimiento)
         
        } else {
          this.egresos.push(movimiento)
          // this.calculoEgresos()
        }
        descripcion.value = ""
        monto.value = ""
      }
      // this.calculoPorcentual()
    }
}
