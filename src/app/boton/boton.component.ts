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
  startActivado: boolean = true;
  score: number = 0;

  constructor() { }

  ngOnInit() {
    //pinta la secuencia
    setInterval(() => {
      this.piezaArray = [6, 6, 6, 6, 6, 6];
      this.contador++;     
      this.piezaArray[this.arraySimmon[this.contador]] = 6;
      this.piezaArray[this.arraySimmon[this.contador]] = this.arraySimmon[this.contador];
      this.reproducir(this.arraySimmon[this.contador]);
      // this.botonDesactivados = true;
      if (this.contador > this.arraySimmon.length) {
        // this.botonDesactivados = false;
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
        this.arraySimmon.push(Math.floor(Math.random() * 6))
        this.contador = -1;
        this.score++;
      }
    }
  }

  start() {
    if (this.startActivado == true) {
      this.arraySimmon.push(Math.floor(Math.random() * 6))
      this.contador = -1;
      this.botonDesactivados = false; 
      this.startActivado = false;
      this.ngOnInit();
    }
  }

  compararRespuesta() {
    for (let i = 0; i < this.arraySimmon.length; i++) {
      if (this.arrayRespuestaUsuario[i] === this.arraySimmon[i]) {
        this.continuar = true;
      } else if (this.arrayRespuestaUsuario[i] !== this.arraySimmon[i] && this.arrayRespuestaUsuario[i] !== undefined) {
        const lose = new Audio("../../assets/Bleeps/lose.mp3");
        lose.play();
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
        this.startActivado = true;

        alert("Has perdido, puntuacion final: "+this.score);
        this.score = 0;
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