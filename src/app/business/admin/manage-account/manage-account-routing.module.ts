import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageAccountComponent } from './manage-account.component';

const routes: Routes = [{
  path: '',
  component: ManageAccountComponent,
  children: [
    { path: 'add-user', loadChildren: () => import('./add-user/add-user.module').then(m => m.AddUserModule) },
    // tslint:disable-next-line: max-line-length
    { path: 'remove-user', loadChildren: () => import('./remove-user/remove-user.module').then(m => m.RemoveUserModule) },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageAccountRoutingModule { }

