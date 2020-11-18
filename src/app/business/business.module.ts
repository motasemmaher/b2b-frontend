import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './business.component';

import { BusinessRoutingModule } from './business-routing.module';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from './shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    BusinessRoutingModule,
    SharedModule,
    TranslateModule.forChild()

  ],
  declarations: [
    BusinessComponent,
  ],
  providers: [
  ]
})

export class BusinessModule { }
