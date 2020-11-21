import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InsertProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
