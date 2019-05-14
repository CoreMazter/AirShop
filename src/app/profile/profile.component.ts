import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  flights: any;
  constructor(private info: UserService) { }

  ngOnInit() {

     this.info.getContenido(JSON.parse(localStorage.getItem('token'))).subscribe(content => {
       this.flights = content; console.log(this.flights); });

  }
}



