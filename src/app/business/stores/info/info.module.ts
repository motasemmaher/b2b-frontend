import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { AboutStorePage } from './component/about-store/about-store.page';
import { InfoComponent } from './info.component';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { OffersPage } from './component/offers/offers.page';
@NgModule({
  declarations: [
    InfoComponent,
    AboutStorePage,
    OffersPage,
    LoadingComponent
  ],
  imports: [
  CommonModule,
    InfoRoutingModule,
    IonicModule,
    // SharedModule,
    TranslateModule.forChild()
  ]
})
export class InfoModule { }
