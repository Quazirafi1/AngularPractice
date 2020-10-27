import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test1RoutingModule } from './test1-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [LoginComponent, ListComponent],
  imports: [
    CommonModule,
    Test1RoutingModule
  ]
})
export class Test1Module { }
