import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { StoresService } from '../../../service/stores.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../../model/category';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {


  products: any[];
  storeId: string;
  categories: Category;
  isFetching = false;

  constructor(
    private storesService: StoresService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.storeId = params.id;
      this.storesService.getCategoriesByStoreId('stores', this.storeId).subscribe(res => {
        this.categories = res.categories;
      });
      this.isFetching = true;
      this.storesService.getProductsByStoreId('stores', this.storeId).subscribe(res => {
        this.isFetching = false;
        this.products = res.products;
      });
    });
  }
  customPopoverOptions: any = {
    header: 'Select Category',
    // message: 'You can scroll down'
  };
  ngOnInit(): void {
  }

  updateCategory(value) {
    let { value: categoryId } = value.target;
    if (categoryId === 'all') {
      categoryId = null;
    }
    this.isFetching = true;
    this.storesService.getProductsByCategoryIdAndStoreId('stores', this.storeId, categoryId).subscribe(res => {
      this.isFetching = false;
      this.products = res.products;
    });
  }


}
