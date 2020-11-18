import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/business',
    pathMatch: 'full'
  },
  {
    path: 'business',
    loadChildren: './business/business.module#BusinessModule',
  },
  // { path: 'stores', loadChildren: () => import('./business/stores/stores.module').then(m => m.StoresModule) },
  // { path: 'info', loadChildren: () => import('./business/stores/info/info.module').then(m => m.InfoModule) },
  // { path: 'categories', loadChildren: () => import('./business/categories/categories.module').then(m => m.CategoriesModule) },
  // { path: 'offers', loadChildren: () => import('./business/offers/offers.module').then(m => m.OffersModule) },
  // { path: 'shopping-card', loadChildren: () => import('./business/shopping-card/shopping-card.module').then(m => m.ShoppingCardModule) },
  // { path: 'settings', loadChildren: () => import('./business/settings/settings.module').then(m => m.SettingsModule) },
  // { path: 'products', loadChildren: () => import('./business/products/products.module').then(m => m.ProductsModule) },
  // {
  //   path: 'search-by-image', loadChildren: () => import('./business/search-by-image/search-by-image.module')
  //     .then(m => m.SearchByImageModule)
  // },
  // { path: 'chat', loadChildren: () => import('./business/chat/chat.module').then(m => m.ChatModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
