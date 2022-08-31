import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clase01';

  edadUno:number = 0;
  edadDos:number = 0;

  promedio:number = 0;
  suma:number = 0;

  mostrarCalculos:boolean = false;

  realizarCalculos(){
    this.suma = this.edadUno + this.edadDos;
    this.promedio = this.suma / 2;

    this.mostrarCalculos = true;
  }

  limpiarValores(){
    this.edadUno = 0;
    this.edadDos = 0;

    this.promedio = 0;
    this.suma = 0;

    this.mostrarCalculos = false;
  }

  validarEdades(){
    if (this.edadUno < 0){
      this.edadUno = 0
    }
    else if (this.edadUno > 100){
      this.edadUno = 100
    }

    if (this.edadDos < 0){
      this.edadDos = 0
    }
    else if (this.edadDos > 100){
      this.edadDos = 100
    }

  }
}
