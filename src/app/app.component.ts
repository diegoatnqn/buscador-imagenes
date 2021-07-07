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
    this.misImagenes = [];
    console.log("Usted buscó :" + this.aBuscar.value);
    this.img.buscar(this.aBuscar.value).subscribe((data) => {
      this.miResultado = data;
      this.cargar();
      this.cargarAlbum();
    });
  }
    cargarAlbum() {
      for (let i = 0; i < 10; i++) {
        const src = this.misImagenes[i]["urls"].full;
        const caption = 'Image ' + i + ' caption here';
        const thumb = 'demo/img/image' + i + '-thumb.jpg';
        const album = {
          src: src,
          caption: caption,
          thumb: thumb
        };

        this._albums.push(album);
      }
    }
    cargar() {
      let i = 0;
      for (i; i < this.miResultado["results"].length; i++) {
        this.misImagenes.push(this.miResultado["results"][i]);
        console.log(this.miResultado["results"][i]);
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
