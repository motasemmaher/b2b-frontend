import { Component, OnInit } from '@angular/core';
import data from './data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data = data;


  constructor() {
    this.data = this.data.map((item) => {
      return { ...item, href: `/product` };
    });
  }

  ngOnInit() {
  }

}
