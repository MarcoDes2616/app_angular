import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';
  saludo = "Saludos desde Angular"
  app:number = 3

  changeApp(n:number){
    this.app = n
  }
}
