import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AccountInfoRoutingModule } from './account-info-routing.module';
import { AccountInfoComponent } from './account-info.component';
import { ManageGarageOwnerComponent } from './manageGarageOwner/manageGarageOwner.component';
import { ManageCarOwnerComponent } from './manageCarOwner/manageCarOwner.component';
import { ManageUserInfoComponent } from './manage-user-info/manage-user-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    AccountInfoComponent,
    ManageCarOwnerComponent,
    ManageGarageOwnerComponent,
    ManageUserInfoComponent
  ],
  imports: [
    IonicModule,
    AccountInfoRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [

  ],
})


export class AccountInfoModule {

}
