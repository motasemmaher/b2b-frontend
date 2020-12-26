import { Component, OnInit } from '@angular/core';
import { ProductsService } from './service/products.service';
// import { InfiniteScroll } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  // directives: [InfiniteScroll]
})
export class ProductsComponent implements OnInit {

  products: any [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    console.log('111111 asds')
    this.productsService.getProducts().subscribe((res) => {
      console.log('asds 22222')
      this.products = res.products;
    });
  }

  getProduct(type) {
    console.log('asds')
    if (type === 'up') {
      this.productsService.setBothDataSkipAndLimit(this.productsService.getLimit() + 30,this.productsService.getSkip() + 30);
      this.productsService.getProducts().subscribe((res) => {
        this.products = res.products;
      });
    } else {
      this.productsService.setBothDataSkipAndLimit(this.productsService.getLimit() + 30,this.productsService.getSkip() + 30);
      this.productsService.getProducts().subscribe((res) => {
        this.products = res.products;
      });
    }
  }
}
