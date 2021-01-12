import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/core/guards/auth/auth.guard';

import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'add-user',
        pathMatch: 'manage-account'
      },
      {
        // tslint:disable-next-line: max-line-length
        path: 'manage-account', loadChildren: () => import('./manage-account/manage-account.module').then(m => m.ManageAccountModule), canActivate: [AuthGuard],
      },
      {
        // tslint:disable-next-line: max-line-length
        path: 'complaints', loadChildren: () => import('../complaints/complaints.module').then(m => m.ComplaintsModule), canActivate: [AuthGuard],
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
