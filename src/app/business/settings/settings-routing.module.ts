import { AccountInfoModule } from './manage-accounts/account-info/account-info.module';
import { AuthRoutingConstants } from './../../core/constants/routes';
import { ManageAccountComponent } from './../admin/manage-account/manage-account.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';

const routes: Routes = [
  { 
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'general'
      },
      {
        path: 'general',
        component: GeneralSettingsComponent
      },
      {
        path: 'manage-account',
        component: ManageAccountComponent
      },
      {
          path: `${AuthRoutingConstants.SIGN_UP}/:${AuthRoutingConstants.TYPE}`,
          loadChildren: () => import('./manage-accounts/account-info/account-info.module').then(m => m.AccountInfoModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
