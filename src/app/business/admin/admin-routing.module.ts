import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      // tslint:disable-next-line: max-line-length
      { path: 'manage-account', loadChildren: () => import('./manage-account/manage-account.module').then(m => m.ManageAccountModule) },
      { path: 'complaints', loadChildren: () => import('./complaints/complaints.module').then(m => m.ComplaintsModule) },
      // tslint:disable-next-line: max-line-length
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
