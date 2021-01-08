import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';

import { AllMyStoresRoutingModule } from './all-my-stores-routing.module';
import { AllMyStoresComponent } from './all-my-stores.component';
import { SharedModule } from '@app/shared/shared.module';
import { MyStoresService } from './services/my-stores.service';
@NgModule({
  declarations: [AllMyStoresComponent],
  imports: [
    CommonModule,
    AllMyStoresRoutingModule,
    SharedModule
  ],
  providers: [
    MyStoresService
  ]
})
export class AllMyStoresModule { }
