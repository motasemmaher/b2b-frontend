import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { BusinessComponent } from './business.component';
import { AuthGuard } from '@app/core/guards/auth/auth.guard';
import { BusinessRoutingConstants } from '@app/core/constants/routes';
const routes: Routes = [
  {
    path: '',
    component: BusinessComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'store',
      },
      // {
      //   path: 'home',
      //   loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      // },
      {
        path: 'store',
        loadChildren: () =>
          import('./stores/stores.module').then((m) => m.StoresModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'search-by-image',
        loadChildren: () =>
          import('./search-by-image/search-by-image.module').then(
            (m) => m.SearchByImageModule
          ),
      },
      // {
      //   path: 'categories',
      //   loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)
      // },
      {
        path: 'offers',
        loadChildren: () =>
          import('./offers/offers.module').then((m) => m.OffersModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
      {
        path: 'shopping-card',
        loadChildren: () =>
          import('./shopping-card/shopping-card.module').then(
            (m) => m.ShoppingCardModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'chat',
        loadChildren: () =>
          import('./chat/chat.module').then((m) => m.ChatModule),
        canActivate: [AuthGuard],
      },
      {
        path: BusinessRoutingConstants.MY_STORES,
        loadChildren: () =>
          import('./all-my-stores/all-my-stores.module').then(
            (m) => m.AllMyStoresModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'my-cars',
        loadChildren: () =>
          import('./my-cars/my-cars.module').then((m) => m.MyCarsModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'complaints',
        loadChildren: () =>
          import('./complaints/complaints.module').then(m => m.ComplaintsModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        canActivate: [AuthGuard],
      },
      { path: 'sos', loadChildren: () => import('./sos/sos.module').then(m => m.SosModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessRoutingModule { }
