import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  url = 'http://192.168.84.123:6543';
  flights: any;
  bOrigen;
  bDestino;


  constructor(private snackBar: MatSnackBar, private fly: HttpClient) {
    this.fly.get(this.url + '/vuelos').subscribe(data => {this.flights = data; console.log(this.flights); });
    console.log(this.flights);
  }

  ngOnInit() {
  }

  buscar() {
    const aux = this.flights;
    this.flights = [];
    aux.forEach(flight => {
      if (flight.origen === this.bOrigen && this.bDestino === flight.destino) {
        this.flights.push(flight);
      }
    });
    console.log(this.flights);
  }

comprar(i) {
  let cont = 0;
  console.log(i);
  const f = this.flights[i];
  console.log(f);
  let carrito: any[] = [0];
  if (localStorage.getItem('vuelo')) {
    carrito = JSON.parse(localStorage.getItem('vuelo'));
  }
  if (carrito.length > 0) {

    carrito.forEach(element => {
      console.log(f.id_v);
      console.log(element.id_v);
      if (f.id_v === element.id_v) {
        cont++;
      }
    });
    if (cont !== 0) {
      this.snackBar.open('El vuelo ya fue agregado', 'Ok', {duration: 1000, });
    } else {
      carrito.push(f);
    }
    if (carrito[0] === 0) {
      carrito.splice(0, 1);
    }
  } else {
    carrito.push(f);
  }

  localStorage.setItem('vuelo', JSON.stringify(carrito));
}

}
