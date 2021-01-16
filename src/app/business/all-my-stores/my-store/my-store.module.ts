import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyStoreRoutingModule } from './my-store-routing.module';
import { MyStoreComponent } from './my-store.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { IonicModule } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
import { SharedModule } from '@app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateOffersComponent } from './create-offers/create-offers.component';

@NgModule({
  declarations: [
    MyStoreComponent,
    ManageProductComponent,
    ManageCategoryComponent,
    MyProductsComponent,
    CreateOffersComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    MyStoreRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    Camera
  ],
  exports: [ManageCategoryComponent]
})
export class MyStoreModule { }
