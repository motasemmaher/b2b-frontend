import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoresRoutingModule } from './stores-routing.module';
import { StoresComponent } from './stores.component';
import {  SharedModule } from '../shared/shared.module';
// import { StoreInfoPage } from './store-info/store-info.page';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    StoresComponent,
    // StoreInfoPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    StoresRoutingModule,
    SharedModule,
    TranslateModule.forChild()
  ]
})
export class StoresModule { }
