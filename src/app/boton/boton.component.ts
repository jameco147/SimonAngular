import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})

export class BotonComponent implements OnInit {
  // VARIABLES
  contador: number = -1;
  disabled: boolean = false;
  piezaArray: number[] = [6, 6, 6, 6, 6, 6];
  arraySimmon: number[] = [];
  usados: number = 0;
  url: number = 1;
  arrayRespuestaUsuario: number[] = [];
  estadoBoton: boolean = false;
  turnoJugador: boolean = false;
  continuar: boolean = false;
  botonDesactivados: boolean = true;

  constructor() { }

  ngOnInit() {
    //pinta la secuencia
    setInterval(() => {
      //botonDesactivados = true;
      this.piezaArray = [6, 6, 6, 6, 6, 6];
      this.piezaArray[this.arraySimmon[this.contador]] = 6;
      this.contador++;     
      this.piezaArray[this.arraySimmon[this.contador]] = this.arraySimmon[this.contador];
      this.reproducir(this.arraySimmon[this.contador]);
      if (this.contador > this.arraySimmon.length) {
        this.turnoJugador = true;
      }
      console.log(this.contador);
    }, 1000);
  }

  respuestaUsuario(num) {
    if (!this.botonDesactivados) {
        this.reproducir(num);
      if (this.turnoJugador) {
        this.arrayRespuestaUsuario.push(num);
        this.compararRespuesta();
        //pinta y despinta botones al hacer click
        if (this.estadoBoton) {
          this.piezaArray[num] = num;
          this.usados = num;
          this.estadoBoton = true;
        } else {
          this.piezaArray[this.usados] = 6;
          this.piezaArray[num] = num;
          this.estadoBoton = false;
          this.usados = num;
        }
      }

      if (this.continuar) {
        this.arrayRespuestaUsuario = [];
        this.start();
      }
    }
  }

  start() {
    this.arraySimmon.push(Math.floor(Math.random() * 6))
    this.contador = -1;
    this.botonDesactivados = false;
  }

  compararRespuesta() {
    for (let i = 0; i < this.arraySimmon.length; i++) {
      if (this.arrayRespuestaUsuario[i] === this.arraySimmon[i]) {
        this.continuar = true;
      } else if (this.arrayRespuestaUsuario[i] !== this.arraySimmon[i] && this.arrayRespuestaUsuario[i] !== undefined) {
        this.continuar = false;
        this.botonDesactivados = true;
        this.contador = -1;
        this.disabled  = false;
        this.piezaArray = [6, 6, 6, 6, 6, 6];
        this.arraySimmon = [];
        this.usados = 0;
        this.url = 1;
        this.arrayRespuestaUsuario = [];
        this.estadoBoton = false;
        this.turnoJugador = false;
        this.continuar = false;

        alert("Derrota!");
        break;
      } else {
        this.continuar = false;
        break;
      }
    }
  }

  reproducir(num) {
    const audio = new Audio("../../assets/Bleeps/"+num+".wav");
    audio.play();
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
  contador: number = 0;
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