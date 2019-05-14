import { Component, OnInit } from '@angular/core';
import {ConfirmService} from '../Services/confirm.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(private http: ConfirmService, private snackBar: MatSnackBar) {}

  url = '/adquisicion';
  order: any[] = [];

  ngOnInit() {
    if (localStorage.getItem('vuelo')) {
      this.order = JSON.parse(localStorage.getItem('vuelo'));
    }
  }


  onSubmit() {
    this.http.url = this.url;
    console.log(this.order);
    for (let i = 0; i < this.order.length; i++) {
      console.log(this.order[i]);
      this.http.postMethod(this.order[i]).subscribe(hola => {
        this.snackBar.open('Boleto comprado', 'Ok', {duration: 5000 });
      }, error => this.snackBar.open('Error. No se pudo realizar la compra', 'NotOk', {duration: 5000}));
    }
    localStorage.removeItem('vuelo');
  }
}
