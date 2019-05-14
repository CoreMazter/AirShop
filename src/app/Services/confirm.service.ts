import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  url;
  constructor(private http: HttpClient) {}

  postMethod(cart) {
    const request = {token: JSON.parse(localStorage.getItem('token')).token , id_v: cart.id_v, cantidad: cart.boletos };
    console.log(request);
    return this.http.post<any>('http://192.168.84.123:6543' + this.url, request);
  }
}
