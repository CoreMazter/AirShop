import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  flights:any;
  constructor(private info:UserService) { }

  ngOnInit() {
    
     this.info.getContenido().subscribe(content=>{this.flights=content;console.log(this.flights);});

  }

  // flights:any[]=[
  //   {
  //     vuelo:"AA123",
  //     aerolinea:"Volaris",
  //     origen:"Guadalajara",
  //     destino:"CDMX"
  //   },
  //   {
  //     vuelo:"AA345",
  //     aerolinea:"Viva Aerobús",
  //     origen:"CDMX",
  //     destino:"Guanajuato"
  //   },
    
  // ];
}



