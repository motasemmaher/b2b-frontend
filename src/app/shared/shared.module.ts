import { ShowHidePasswordComponent } from './Show-Hide-Password/Show-Hide-Password.component';
import { TranslateModule } from '@ngx-translate/core';
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
import { ToastService } from './toaster/toast.service';

@NgModule({
  imports: [
  CommonModule,
    IonicModule,
    RouterModule,
    TranslateModule.forChild()
  ],
  declarations: [
    LoadingComponent,
    CardComponent,
    FiltersComponent,
    ViewProductComponent,
    UploadImageComponent,
    NoDataFoundComponent,
    ShowHidePasswordComponent

  ],
  providers:[
    ToastService,
  ],
  exports: [
    LoadingComponent,
    CardComponent,
    FiltersComponent,
    ViewProductComponent,
    UploadImageComponent,
    NoDataFoundComponent,
    ToastService,
    ShowHidePasswordComponent
  ]
})
export class SharedModule { }
