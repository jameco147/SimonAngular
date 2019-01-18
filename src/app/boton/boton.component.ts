import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {
  index: number = -1;
  disabled: boolean = false;
  // piezaArray: number[] = [1,2,3,4,5,6];
  piezaArray: number[] = [6,6,6,6,6,6];
  arraySimmon: number[] = [];
  usados: number = 0;
  url: number = 1;
  arrayRespuestaUsuario: number[] = [];
  estadoBoton : boolean = false;
  turnoJugador : boolean = false;
  continuar: boolean = false;


  constructor() { }

  ngOnInit() {
    //pinta la secuencia
    setInterval( ()=>{
      this.piezaArray = [6,6,6,6,6,6];
      this.piezaArray[this.arraySimmon[this.index]] = 6;
      this.index = (this.index+1);
      this.piezaArray[this.arraySimmon[this.index]] = this.arraySimmon[this.index];
      if (this.index > this.arraySimmon.length) {
        this.turnoJugador = true;
      }
      console.log(this.index);
    } , 1000);
  }

respuestaUsuario(num){

  if (this.turnoJugador) {
    this.arrayRespuestaUsuario.push(num);
    this.compararRespuesta();
    
    console.log(this.arraySimmon);
    
    console.log(this.arrayRespuestaUsuario);
  

    //pinta y despinta botones al hacer click
    if (this.estadoBoton) {
      this.piezaArray[num]=num;
      this.usados = num;
      this.estadoBoton = true;
    } else {
      this.piezaArray[this.usados]=6;
      this.piezaArray[num]=num;
      this.estadoBoton = false;
      this.usados = num;
    }
  }

  console.log(this.continuar + " continua?");
  

  if (this.continuar) {
    this.arrayRespuestaUsuario = [];
    this.start();
    console.log("hola");
    
  }

}

start(){
  this.arraySimmon.push(Math.floor(Math.random() * 6))
  this.index = -1;
}

compararRespuesta(){
    
  for (let i = 0; i < this.arraySimmon.length; i++) {
    if (this.arrayRespuestaUsuario[i] === this.arraySimmon[i]) {
      console.log("Correcto");
      this.continuar = true;
      console.log(i + " este es i");
      //this.arrayRespuestaUsuario = [];
    } else if (this.arrayRespuestaUsuario[i] !== this.arraySimmon[i] && this.arrayRespuestaUsuario[i] !== undefined){
      console.log("Incorrecto");
      this.continuar = false;
    } else {
      this.continuar = false;
    }
  }

  

  
  
}



}




















//codigo pendiente
/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent {
  index: number = 0;
  disabled: boolean = false;
  // piezaArray: number[] = [1,2,3,4,5,6];
  piezaArray: number[] = [6, 6, 6, 6, 6, 6];

  //rojo 0, morado 1, verde 2, amarillo 3, azul 4, negro 5, gris 6
  arraySimmon: number[] = [1, 0, 4, 5, 1, 5];
  url: number = 1;
  estadoInicio: boolean = true;


  start() {


    
    if (this.estadoInicio) {
      console.log('hola1');
      this.estadoInicio = false;
      for (let i = 0; i < this.arraySimmon.length; i++) {

        console.log('pepito');


        this.resetBoton(this.arraySimmon[i], this.arraySimmon[i]);
        this.sleep(1000);
      }


    }

  }

  resetBoton(posicion, color) {
    console.log('hola2');
    console.log(posicion);
    console.log(color);


    this.piezaArray[posicion] = color;
    console.log(this.piezaArray + ' pieza array');

    console.log(posicion + '  posicion despues');
    console.log(color + '  color despues');
    this.sleep(2000);
    this.piezaArray[posicion] = 6;
    // aquiiiiiiiiiiiiii es donde paras
    console.log(this.piezaArray + ' pieza array despues');
    console.log('hola');

  }
  sleep(miliseconds) {
    var currentTime = new Date().getTime();

    while (currentTime + miliseconds >= new Date().getTime()) {
    }
  }
}*/