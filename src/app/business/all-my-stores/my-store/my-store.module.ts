import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyStoreRoutingModule } from './my-store-routing.module';
import { MyStoreComponent } from './my-store.component';
import { InsertProductComponent } from './insert-product/insert-product.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { IonicModule } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
import { SharedModule } from '@app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateOffersComponent } from './create-offers/create-offers.component';

@NgModule({
  declarations: [
    MyStoreComponent,
    InsertProductComponent,
    CreateCategoryComponent,
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
  exports: [CreateCategoryComponent]
})
export class MyStoreModule { }
