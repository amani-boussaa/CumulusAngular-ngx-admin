import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { AuthlayoutamaniComponent } from './authlayoutamani/authlayoutamani.component';
import { LogoutComponent } from './pages/logout/logout.component';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },

  {path:'auth',component:AuthlayoutamaniComponent,children:[
    {path:'login',loadChildren:()=>import('./pages/login/login.module').then(m=>m.LoginModule)},
    {path:'register',loadChildren:()=>import('./pages/register/register.module').then(m=>m.RegisterModule)},
    {path:'forgot-password',loadChildren:()=>import('./pages/forgot-password/forgot-password.module').then(m=>m.ForgotPasswordModule)},
    {path:'reset-password/:token',loadChildren:()=>import('./pages/reset-password/reset-password.module').then(m=>m.ResetPasswordModule)},
    {path:'logout',loadChildren:()=>import('./pages/logout/logout.module').then(m=>m.LogoutModule)},
  ]},

  // {
  //   path: 'login',
  //   loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),

  //   // component: LoginComponent,
  // },
  {
    path: 'auth2',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
