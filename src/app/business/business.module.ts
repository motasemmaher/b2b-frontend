import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './business.component';

import { BusinessRoutingModule } from "./business-routing.module";
import { IonicModule } from '@ionic/angular';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    BusinessRoutingModule,
    SharedModule
  ],
  declarations: [
    BusinessComponent,
  ],
  providers: [
  ]
})

export class BusinessModule { }
