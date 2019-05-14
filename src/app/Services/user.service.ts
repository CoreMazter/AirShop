import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL = '/adquisicion';
  info: any;

  constructor(private http: HttpClient) { }

  getContenido(token) {
  return this.info = this.http.get('http://192.168.84.123:6543' + this.URL + '?token=' + token.token);
  }
}
