import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCardRoutingModule } from './shopping-card-routing.module';
import { ShoppingCardComponent } from './shopping-card.component';


@NgModule({
  declarations: [ShoppingCardComponent],
  imports: [
    CommonModule,
    ShoppingCardRoutingModule,
    IonicModule
  ]
})
export class ShoppingCardModule { }
