import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor() {}

  order: any[] = [];

  ngOnInit() {
    if (localStorage.getItem('vuelo')) {
      this.order = JSON.parse(localStorage.getItem('vuelo'));
    }
  }


}
