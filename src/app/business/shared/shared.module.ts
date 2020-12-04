import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CardComponent } from './card/card.component';
import { LoadingComponent } from './loading/loading.component';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  declarations: [
    LoadingComponent,
    CardComponent,
    FiltersComponent

  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LoadingComponent,
    CardComponent,
    FiltersComponent
  ]
})
export class SharedModule { }
