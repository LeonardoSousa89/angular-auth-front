import { AuthGuard } from './core/guard/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { 
    path: '', 
    loadChildren:()=>import('./core/components/auth/auth.module').then(module=>module.AuthModule)
  },{
    path: 'admin',
    canActivateChild: [AuthGuard],
    loadChildren:()=>import('./components/admin/admin.module').then(module=>module.AdminModule)
  }  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
