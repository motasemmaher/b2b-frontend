import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { IonicModule } from '@ionic/angular';

import { HomeRoutingModule } from './home-routing.module';
import {  CardComponent } from '../shared/card/card.component';
import { DescriptionPipe} from '../shared/pipes/description/description.pipe'

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonicModule
  ],
  declarations: [
    HomeComponent,
    CardComponent,
    DescriptionPipe
    // LengthOfDescriptionCardPipe,
  ]
})
export class HomeModule { }
