import { CreateCarOwnerComponent } from './CreateCarOwner/CreateCarOwner.component';
import { CreateGarageOwnerComponent } from './CreateGarageOwner/CreateGarageOwner.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes =
    [
        {
            path: '',
            component: AuthComponent,
            children: [
                {
                    path: '',
                    pathMatch: 'full',
                    redirectTo: 'login',
                },
                {
                    path: 'login',
                    component: LoginComponent,
                },
                {
                    path: 'register',
                    component: RegisterComponent,
                },
                {
                    path: 'reset',
                    component: ResetPasswordComponent,
                },
                {
                    path: 'createGarageOwner',
                    component: CreateGarageOwnerComponent,
                },
                {
                    path: 'createCarOwner',
                    component: CreateCarOwnerComponent,
                }
            ]
        },
    ]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }