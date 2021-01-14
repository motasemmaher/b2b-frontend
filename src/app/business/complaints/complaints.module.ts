import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplaintsRoutingModule } from './complaints-routing.module';
import { ComplaintsComponent } from './complaints.component';
import { ComplaintsService } from './service/complaints.service';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '@app/shared/shared.module';
@NgModule({
  declarations: [ComplaintsComponent],
  imports: [
    CommonModule,
    ComplaintsRoutingModule,
    SharedModule
  ],
  providers: [
    ComplaintsService,
    IonicModule
  ]
})
export class ComplaintsModule { }
