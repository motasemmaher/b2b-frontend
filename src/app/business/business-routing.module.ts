import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BusinessComponent } from './business.component';

const routes: Routes = [
  {
    path: '',
    component: BusinessComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'store',
        loadChildren: () => import('./stores/stores.module').then(m => m.StoresModule)
      }
    ],
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
