import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CardComponent } from './card/card.component';
import { LoadingComponent } from './loading/loading.component';
import { FiltersComponent } from './filters/filters.component';
import { RouterModule } from '@angular/router';
import { ViewProductComponent } from './view-product/view-product.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { NoDataFoundComponent } from './no-data-found/no-data-found.component';

@NgModule({
  imports: [
  CommonModule,
    IonicModule,
    RouterModule,
  ],
  declarations: [
    LoadingComponent,
    CardComponent,
    FiltersComponent,
    ViewProductComponent,
    UploadImageComponent,
    NoDataFoundComponent

  ],
  exports: [
    LoadingComponent,
    CardComponent,
    FiltersComponent,
    ViewProductComponent,
    UploadImageComponent,
    NoDataFoundComponent
  ]
})
export class SharedModule { }
