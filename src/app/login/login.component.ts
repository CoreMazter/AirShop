import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logusername;
  logpassword;
  regusername;
  showspinner=false;
  regpassword;
  url;
  token;
  array = [];
  constructor(private http:HttpClient, private router:Router, private snackBar:MatSnackBar) {

   }

  ngOnInit() {
  }
  
  login(){
    this.showspinner=true;
    this.http.get(this.url + '/ruta?user=' + this.logusername + '&pass=' + this.logpassword).subscribe(response=>{
      this.token=response;
    },error=>{
      this.snackBar.open("Revisa tus credenciales");
      this.showspinner=false;
    });
    
  }
  register(){
    this.showspinner=true;
    this.http.post(this.url + '/ruta',{username:this.regusername,password:this.regpassword}).subscribe(response=>{

    },error=>{
      this.snackBar.open("no se pudo crear usuario");
      this.showspinner=false;
    });
  }
}
