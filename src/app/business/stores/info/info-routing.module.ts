import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoComponent } from './info.component';
import { AboutStorePage } from './component/about-store/about-store.page';
import { OffersPage } from './component/offers/offers.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: InfoComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'about-store',
      },
      {
        path: 'about-store',
        component: AboutStorePage,
      },
      {
        path: 'offers',
        component: OffersPage,
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
