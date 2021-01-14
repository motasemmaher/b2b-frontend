import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AllMyStoresRoutingModule } from './all-my-stores-routing.module';
import { AllMyStoresComponent } from './all-my-stores.component';
import { SharedModule } from '@app/shared/shared.module';
import { MyStoresService } from './services/my-stores.service';
import { AddStoreComponent } from './add-store/add-store.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [AllMyStoresComponent, AddStoreComponent],
  imports: [
    CommonModule,
    AllMyStoresRoutingModule,
    SharedModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MyStoresService
  ]
})
export class AllMyStoresModule { }
