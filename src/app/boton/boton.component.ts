import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {
  index: number = 0;
  disabled: boolean = false;
  piezaArray: number[] = [1,2,3,4,5,6];
  url: number = 1;

  constructor() { }

  ngOnInit() {
  }

  simonEnable(){
    for (let i = 0; i < this.piezaArray.length; i++) {

      const element = this.piezaArray[i];

      
    }
  }
}
