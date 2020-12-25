import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllMyStoresComponent } from './all-my-stores.component';
import { AuthGuard} from '@app/core/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AllMyStoresComponent,
  },
  {
    path: 'store-info',
    loadChildren: () => import('./my-store/my-store.module').then(m => m.MyStoreModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllMyStoresRoutingModule { }
