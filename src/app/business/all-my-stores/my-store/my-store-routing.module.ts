import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyStoreComponent } from './my-store.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CreateOffersComponent } from './create-offers/create-offers.component';
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
        path: 'create-category',
        component: CreateCategoryComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'create-offers',
        component: CreateOffersComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'my-products',
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
