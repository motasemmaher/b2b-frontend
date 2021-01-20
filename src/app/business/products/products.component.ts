import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from './service/products.service';
// import { InfiniteScroll } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  // directives: [InfiniteScroll]
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: any[];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = [];
    this.getProduct();
  }

  getProduct() {
    this.productsService.getProducts().subscribe((res) => {
      this.productsService.setBothDataSkipAndLimit(this.productsService.getLimit(), this.productsService.getSkip() + 5);
      console.log(res.products.length)
      this.products.push(...res.products);
    });
  }
  ngOnDestroy(): void {
    this.productsService.resetBothDateSkipAndLimit();
  }
}
