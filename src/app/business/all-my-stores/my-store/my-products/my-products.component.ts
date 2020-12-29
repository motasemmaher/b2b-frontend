import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyStoresService } from '../../services/my-stores.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css'],
})
export class MyProductsComponent implements OnInit {
  products: any[];
  categories: any[];
  storeId: string = null;
  categoryId: string = null;
  filters = [
    { label: 'By Descending Name', value: 'nameSort=1' },
    { label: 'By ascending Name', value: 'nameSort=-1' },
    { label: 'By Descending Price', value: 'priceSort=-1&nameSort=0' },
    { label: 'By ascending Price', value: 'priceSort=1&nameSort=0' },
  ];
  customPopoverOptions: any = {
    header: 'Select Category',
  };
  filterSelected: any = null;
  constructor(
    private myStoresService: MyStoresService,
    private activatedRoute: ActivatedRoute
  ) {
    this.getStoreId();
  }
  getStoreId() {
    this.activatedRoute.params.subscribe(params => {
      this.storeId = params.id;
      this.myStoresService.getCategories(this.storeId).subscribe(res => {
        this.categories = res.categories;
      });
      this.myStoresService.getProducts(this.storeId, null, 'nameSort=1').subscribe((res) => {
        this.products = res.products;
      })
    });
  }

  filterApplied(value) {
    this.filterSelected = value;
    this.myStoresService.getProducts(this.storeId, this.categoryId, value).subscribe((res) => {
      this.products = res.products;
    })
  }

  ngOnInit(): void {
  }

  updateCategory(value) {
    let { value: categoryId } = value.target;
    if (categoryId === 'all') {
      categoryId = null;
    }
    this.categoryId = categoryId;
    this.myStoresService.getProducts(this.storeId, categoryId, this.filterSelected).subscribe(res => {
      this.products = res;
    });
  }

}
