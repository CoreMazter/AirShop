import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL ='';
  info : any;

  constructor(private http: HttpClient) { }

  getContenido() {
  return this.info = this.http.get(environment.serverUrl+this.URL);
  }
}
