import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CreateUsersComponent } from './create-users/create-users.component';
import { UserComponent } from './create-users/user/user.component';
import { FormComponent } from './create-users/form/form.component';
import { FormCalcComponent } from './calculadora/form/form';
import { ResultCalcComponent } from './calculadora/result/result';
import { PresupuestoComponent } from './presupuesto/presupuesto.component';
import { IngresosComponent } from './presupuesto/ingresos/ingresos';
import { EgresosComponent } from './presupuesto/egresos/egresos';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    UsuarioComponent,
    CalculadoraComponent,
    CreateUsersComponent,
    UserComponent,
    FormComponent,
    FormCalcComponent,
    ResultCalcComponent,
    PresupuestoComponent,
    IngresosComponent,
    EgresosComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
