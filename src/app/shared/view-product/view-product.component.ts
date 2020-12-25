import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ProductService } from '@app/core/services/product/product.service';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewProductComponent implements OnInit {
  id;
  product: any;
  constructor(private productsService: ProductService) {
  }
  
  ngOnInit(): void {
    this.productsService.getProduct(this.id).subscribe(res => {
      console.log(res[0])
      this.product = res[0] ?? {};
    });
  }
}
