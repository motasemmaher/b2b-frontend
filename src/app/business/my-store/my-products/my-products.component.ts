import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
