import { AppRoutingConstants } from '@app/core/constants/routes';
import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';


export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always',
  relativeLinkResolution: 'legacy'
};

const routes: Routes = [
  {
    path: '',
    redirectTo: `/${AppRoutingConstants.BUSINESS}`,
    pathMatch: 'full'
  },
  {
    path: AppRoutingConstants.BUSINESS,
    loadChildren: './business/business.module#BusinessModule',
  },
  {
    path: AppRoutingConstants.AUTH,
    loadChildren: './auth/auth.module#AuthModule',
  },
  // { path: 'view-users', loadChildren: () => import('./business/admin/manage-account/view-users/view-users.module').then(m => m.ViewUsersModule) },
];

@NgModule({
  imports: [
    // tslint:disable-next-line: max-line-length
    RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy, paramsInheritanceStrategy: routingConfiguration.paramsInheritanceStrategy, useHash: true, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
