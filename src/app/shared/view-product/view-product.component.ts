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
      this.product = res[0] ?? {};
    });
  }

  addToShoppingCart() {
    this.productsService.addToShoppingCart(this.product.storeId, this.product._id, { quantity: 1 }).subscribe((res) => {
      console.log(res);
    });
  }
}
