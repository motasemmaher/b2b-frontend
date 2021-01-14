import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllMyStoresComponent } from './all-my-stores.component';
import { AuthGuard} from '@app/core/guards/auth/auth.guard';
import { AddStoreComponent } from './add-store/add-store.component';

const routes: Routes = [
  {
    path: '',
    component: AllMyStoresComponent,
    pathMatch: 'store-info',
    canActivate: [AuthGuard]
  },
  {
    path: 'store-info',
    loadChildren: () => import('./my-store/my-store.module').then(m => m.MyStoreModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'add-store',
    component: AddStoreComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllMyStoresRoutingModule { }
