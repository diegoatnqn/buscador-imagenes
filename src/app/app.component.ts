import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { BuscarService } from './buscar.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aBuscar = new FormControl();
  misImagenes: any = [];
  miResultado: any;
  constructor(public img: BuscarService) {

  }
  buscar() {
    this.misImagenes = [];
    console.log("Usted buscó :" + this.aBuscar.value);
    this.img.buscar(this.aBuscar.value).subscribe((data) => {
      this.miResultado = data;
      this.cargar();
    });
  }
    cargar() {
      let i = 0;
      for (i; i < this.miResultado["results"].length; i++) {
        this.misImagenes.push(this.miResultado["results"][i]);
        console.log(this.miResultado["results"][i]);
      };
    }
}
