import { Product } from './../../core/model/product';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from './service/products.service';
// import { InfiniteScroll } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  // directives: [InfiniteScroll]
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  listenOnErrorLoading: Subscription;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = [];
    this.getProduct();
    this.listenOnErrorLoading = this.productsService.listenOnErrorLoading().subscribe(res => {
      this.products = [];
    })
  }

  getProduct() {
    this.productsService.getProducts().subscribe((res) => {
      this.productsService.setBothDataSkipAndLimit(this.productsService.getLimit(), this.productsService.getSkip() + 5);
      this.pushToArrayProducts(res.products);
    });
  }

  pushToArrayProducts(products : Product[]){
    this.products.push(...products);
  }

  ngOnDestroy(): void {
    this.productsService.resetBothDateSkipAndLimit();
    this.listenOnErrorLoading.unsubscribe();
  }
}
