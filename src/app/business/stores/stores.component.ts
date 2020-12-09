import { Component, OnInit } from '@angular/core';
import stores from './data';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {
  stores = stores;

  constructor() {
    this.stores = this.stores.map((store) => {
      return { ...store, href: `info` };
    });
  }

  ngOnInit(): void {
  }

}
