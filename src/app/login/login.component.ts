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
  url="http://192.168.84.200:6543";
  token;
  array = [];
  constructor(private http:HttpClient, private router:Router, private snackBar:MatSnackBar) {

   }

  ngOnInit() {
  }
  
  login(){
    this.showspinner=true;
    let url=this.url + '/usuarios?nombre=' +''+ this.logusername +''+ '&pass=' +''+ this.logpassword+'';
    this.http.get(url).subscribe(response=>{
      this.token=response;
      localStorage.setItem("token",JSON.stringify(response));
      this.router.navigate(["/catalogo"]);
      console.log(response);
    },error=>{
      this.snackBar.open("Revisa tus credenciales");
      this.showspinner=false;
    });
    
  }
  register(){
    this.showspinner=true;
    this.http.post(this.url + '/usuarios',{nombre:this.regusername,pass:this.regpassword}).subscribe(response=>{
      this.snackBar.open("Registrado con exito");
      this.showspinner=false;
      this.logusername=this.regusername;
      this.logpassword=this.regpassword;
      this.login();
    },error=>{
      this.snackBar.open("no se pudo registrar");
      this.showspinner=false;
    });
  }
}
