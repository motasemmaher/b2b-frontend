import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageCarOwnerComponent } from './manageCarOwner/manageCarOwner.component';
import { ManageGarageOwnerComponent } from './manageGarageOwner/manageGarageOwner.component';
import { ManageUserInfoComponent } from './manage-user-info/manage-user-info.component';
import { AccountInfoComponent } from './account-info.component';
import { AuthRoutingConstants } from '@app/core/constants/routes';

const routes: Routes = [
  {
    path: '',
    component: AccountInfoComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: AuthRoutingConstants.USER_INFO,
      },
      {
        path: AuthRoutingConstants.USER_INFO,
        component: ManageUserInfoComponent,
      },
      {
        path: AuthRoutingConstants.GARAGE_INFO,
        component: ManageGarageOwnerComponent,
      },
      {
        path: AuthRoutingConstants.CAR_INFO,
        component: ManageCarOwnerComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountInfoRoutingModule { }
