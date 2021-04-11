import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () =>
      import('./components/inicio/inicio.module').then((m) => m.InicioModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register', 
    loadChildren: () => 
      import('./components/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'profile',
    loadChildren: () => 
      import('./components/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'admin', 
    loadChildren: () => 
      import('./components/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
