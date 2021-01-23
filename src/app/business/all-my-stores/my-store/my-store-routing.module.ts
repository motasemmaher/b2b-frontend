import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyStoreComponent } from './my-store.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { ManageOffersComponent } from './manage-offers/manage-offers.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { AuthGuard} from '@app/core/guards/auth/auth.guard';
import { BusinessAllowedGuard} from '@app/core/guards/business-allowed.guard';

const routes: Routes = [
  {
    path: '',
    component: MyStoreComponent,
    canActivate: [AuthGuard, BusinessAllowedGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'my-products',
      },
      {
        path: 'manage-product',
        // pathMatch: 'full',
        redirectTo: 'manage-product/insert',
      },
      {
        path: 'manage-product/insert',
        component: ManageProductComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'manage-product/edit/:productId',
        component: ManageProductComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'manage-category',
        component: ManageCategoryComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'manage-offers',
        component: ManageOffersComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'my-products',
        component: MyProductsComponent,
        canActivate: [AuthGuard, BusinessAllowedGuard],
        // canLoad: [BusinessAllowedGuard]
      },
      {
        path: 'orders',
        component: MyProductsComponent,
        canActivate: [AuthGuard, BusinessAllowedGuard],
        // canLoad: [BusinessAllowedGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyStoreRoutingModule { }
