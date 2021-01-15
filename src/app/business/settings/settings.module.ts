import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { ManageAccountComponent } from './../admin/manage-account/manage-account.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { ManageAccountModule } from './../admin/manage-account/manage-account.module';
import { GeneralSettingsModule } from './general-settings/general-settings.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { SharedModule} from '@app/shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SettingsComponent,
    GeneralSettingsComponent,
    ManageAccountComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
    IonicModule,
    FormsModule,
    TranslateModule.forChild(),
    HttpClientModule
  ]
})
export class SettingsModule { }
