import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoresRoutingModule } from './stores-routing.module';
import { StoresComponent } from './stores.component';
import {  CardComponent } from '../shared/card/card.component';
// import { StoreInfoPage } from './store-info/store-info.page';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    StoresComponent,
    CardComponent,
    // StoreInfoPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    StoresRoutingModule,
    TranslateModule.forChild()

  ]
})
export class StoresModule { }
