import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyStoresService } from '../../services/my-stores.service';
import { ToastService } from '@app/shared/toaster/toast.service';

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
    private activatedRoute: ActivatedRoute,
    private toastService: ToastService,
  ) {
    this.getStoreId();
  }
  getStoreId() {
    this.activatedRoute.params.subscribe(params => {
      this.storeId = params.id;
      this.myStoresService.getCategories(this.storeId).subscribe(res => {
        this.categories = res.categories;
      });
      this.getProducts(this.storeId);
    });
  }

  getProducts(storeId: string, categoryId?: string) {
    this.myStoresService.getProducts(storeId, categoryId, 'nameSort=1').subscribe((res) => {
      this.products = res.products.map((product) => {
        return { ...product, isOwne: product.storeId === this.storeId, editPath: product.storeId === this.storeId ? `../manage-product/edit/${product._id}` : '' };
      });
    });
  }


  filterApplied(value) {
    this.filterSelected = value;
    this.getProducts(this.storeId, this.categoryId);
  }

  ngOnInit(): void {
  }

  updateCategory(value) {
    let { value: categoryId } = value.target;
    if (categoryId === 'all') {
      categoryId = null;
    }
    this.categoryId = categoryId;
    this.getProducts(this.storeId, this.categoryId);
  }


  deleteProduct(index: number) {
    const productId = this.products[index]._id;
    const storeId = this.products[index].storeId;
    const categoryId = this.products[index].categoryId;
    this.myStoresService.deleteProduct(storeId, categoryId, productId).subscribe((res) => {
      this.getProducts(this.storeId, this.categoryId);
      this.toastService.presentToastWithOptions('success', 'Product removed successfully', 'success');
    })
  }


}
