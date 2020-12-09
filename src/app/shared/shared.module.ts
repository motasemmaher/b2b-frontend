import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CardComponent } from './card/card.component';
import { LoadingComponent } from './loading/loading.component';
import { FiltersComponent } from './filters/filters.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
  CommonModule,
    IonicModule,
    RouterModule,
  ],
  declarations: [
    LoadingComponent,
    CardComponent,
    FiltersComponent

  ],
  exports: [
    LoadingComponent,
    CardComponent,
    FiltersComponent
  ]
})
export class SharedModule { }
