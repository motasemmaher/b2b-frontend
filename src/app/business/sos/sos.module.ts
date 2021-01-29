import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SosRoutingModule } from './sos-routing.module';
import { SosComponent } from './sos.component';
import { SosService } from './service/sos.service';

@NgModule({
  declarations: [SosComponent],
  imports: [
    CommonModule,
    SosRoutingModule
  ],
  providers: [
    SosService
  ]
})
export class SosModule { }
