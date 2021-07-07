import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Lightbox } from 'ngx-lightbox';

import { BuscarService } from './buscar.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aBuscar = new FormControl();
  misImagenes: any = [];
  private _albums: Array<any> = [];
  miResultado: any;

  constructor(public img: BuscarService, private _lightbox: Lightbox) {
  }
  buscar() {
    this.misImagenes = []; //reset de variables
    this._albums = [];
    console.log("Usted buscó :" + this.aBuscar.value);
    this.img.buscar(this.aBuscar.value).subscribe((data) => {
      this.miResultado = data;
      this.cargar();  //Cargo fotos que recibo en misImagenes
      this.cargarAlbum(); //Cargo cada foto en album para lightbox (visualizador)
    });
  }
  cargarAlbum() { 
    for (let i = 0; i < this.misImagenes.length; i++) {
        const src = this.misImagenes[i]["urls"].regular;
      const caption = this.misImagenes[i].description;
        const album = {
          src: src,
          caption: caption,
          
        };

        this._albums.push(album);   //push a album cada objeto src:foto,caption descripcion
      }
    }
    cargar() {
      let i = 0;
      for (i; i < this.miResultado["results"].length; i++) {
        this.misImagenes.push(this.miResultado["results"][i]); //push a cada imagen
      };
      
  }
  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
