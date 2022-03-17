import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path:'', redirectTo: 'login', pathMatch:'full'},
{ path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
{ path: 'login', loadChildren: () => import('./components/pages/login/login.module').then(m => m.LoginModule) },
{ path: 'notifications', loadChildren: () => import('./components/pages/notifications/notifications.module').then(m => m.NotificationsModule) },
{ path: 'services', loadChildren: () => import('./components/pages/services/services.module').then(m => m.ServicesModule) },
{ path: 'workshops', loadChildren: () => import('./components/pages/workshops/workshops.module').then(m => m.WorkshopsModule) },
{ path:'**',pathMatch:'full',redirectTo:'services'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
