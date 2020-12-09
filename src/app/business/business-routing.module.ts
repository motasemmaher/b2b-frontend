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
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'search-by-image',
        loadChildren: () => import('./search-by-image/search-by-image.module').then(m => m.SearchByImageModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)
      },
      {
        path: 'offers',
        loadChildren: () => import('./offers/offers.module').then(m => m.OffersModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: 'shopping-card',
        loadChildren: () => import('./shopping-card/shopping-card.module').then(m => m.ShoppingCardModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)
      },
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
