import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscarService {

  constructor(public http: HttpClient) { }
  buscar(palabra: string) {
    return this.http.get('https://api.unsplash.com/search/photos?page=1&query=' + palabra+"&order_by=latest", {
      headers: {
        Authorization: 'Client-ID eQBV80GQZi1Bskwc1SGEI23tgRzOBNJAcRc9SOsj6hU'
      }
    })
  }
}
