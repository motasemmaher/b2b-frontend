import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyStoresService } from '@app/business/all-my-stores/services/my-stores.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})

export class ManageCategoryComponent implements OnInit {
  categoryFromGroup: FormGroup;
  categoryFromGroupForUpdate: FormGroup;
  disableButtonUpdate: boolean = true;
  disableButtonSave: boolean = true;
  storeId: string;
  categories: any [] = [];
  categoryIdSelectedForUpdate: string;
  categoryIdForRemoving: string;
  customPopoverOptions: any = {
    header: 'Select Category',
  };

  constructor(
    private myStoresService: MyStoresService,
    private activatedRoute: ActivatedRoute
  ) {
    this.categoryFromGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      tags: new FormControl('', [Validators.required])
    });

    this.listenOnValidateButtonSave();
    this.getStoreId();
  }

  ngOnInit(): void {
  }

  getStoreId() {
    this.activatedRoute.params.subscribe(params => {
      this.storeId = params.id;
      this.getCategroies();
    });
  }

  listenOnValidateButtonSave() {
    this.categoryFromGroup.valueChanges.subscribe(() => {
      if (this.categoryFromGroup.valid) {
        this.disableButtonSave = false;
      } else {
        this.disableButtonSave = true;
      }
    });
  }

  createCategory() {
    this.myStoresService.createCategory(this.storeId, this.categoryFromGroup.value).subscribe((res) => {
      console.log(res);
      this.getCategroies();
    });
  }

  UpdateCategory() {
    this.myStoresService.updateCategory(this.storeId, this.categoryIdSelectedForUpdate, this.categoryFromGroupForUpdate.value).subscribe((res) => {
      console.log(res);
    });
  }

  getCategroies() {
    this.myStoresService.getCategories(this.storeId).subscribe(res => {
      this.categories = res.categories;
    });
  }
  
  updateCategoryInfo(categoryId) {
    this.myStoresService.getCategory(this.storeId, categoryId.detail.value).subscribe(res => {
      this.categoryIdSelectedForUpdate = res._id;
      this.categoryFromGroupForUpdate = new FormGroup({
        name: new FormControl(res.name, [Validators.required]),
        tags: new FormControl((res.tags || []).join(', ') || '', [Validators.required])
      });
    });
  }
  
  updateCategoryIdForRemoving(categoryId) {
    this.categoryIdForRemoving = categoryId.detail.value;
  }

  removeCategory() {
    this.myStoresService.removeCategory(this.storeId, this.categoryIdForRemoving).subscribe(res => {
      this.getCategroies();
      this.categoryIdForRemoving = null;
    });
  }


}
