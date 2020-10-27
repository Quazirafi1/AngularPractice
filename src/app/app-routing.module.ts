import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent} from './admin/admin.component';
import {UsersComponent} from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [

  {
    path: 'admin',
    loadChildren:()=>import('./admin/admin.module')
    .then(mod=>mod.AdminModule)
  },

  {
    path: 'test1',
    loadChildren:()=>import('./test1/test1.module')
    .then(mod=>mod.Test1Module)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
