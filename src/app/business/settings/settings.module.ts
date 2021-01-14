import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { SharedModule} from '@app/shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
    IonicModule
  ]
})
export class SettingsModule { }
