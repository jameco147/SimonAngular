import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {
  index: number = 0;
  disabled: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}
