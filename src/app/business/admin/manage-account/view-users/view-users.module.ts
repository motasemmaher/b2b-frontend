import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewUsersRoutingModule } from './view-users-routing.module';
import { ViewUsersComponent } from './view-users.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [ViewUsersComponent],
  imports: [
    CommonModule,
    ViewUsersRoutingModule,
    IonicModule
  ]
})
export class ViewUsersModule { }
