import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
//Primero creamos una variable datos

valor1!:number;
valor2 !:number;
error="(No eligio operacion)";
resultado:any;
num!:string;

calcular(val1:number, val2:number,Op:string): any  
{
  if (Op == '+') {
    return this.resultado = val1 + val2

  } else if (Op == '-') {
    return this.resultado = val1 - val2

  } else if (Op == '*') {
    return this.resultado = val1 * val2

  } else if (Op == '/') {
    return this.resultado = val1 / val2
    console.log(this.resultado);
    
}}
}