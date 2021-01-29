import { SharedModule } from '@app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MyCarsRoutingModule } from './my-cars-routing.module';
import { MyCarsComponent } from './my-cars.component';
import { CarsService } from './service/cars.service';
import {  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MyCarsComponent],
  imports: [
    CommonModule,
    MyCarsRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    CarsService
  ]
})
export class MyCarsModule { }
