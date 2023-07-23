import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-result-calc',
    templateUrl: './result.html',
    // styleUrls: ['./calculadora.component.css']
  })


export class ResultCalcComponent{
  @Input() resultado:number
}