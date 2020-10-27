import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { from } from 'rxjs';
import { AdminComponent } from './admin/admin.component';
//import { TestBed } from '@angular/core/testing';
//import { Console } from 'console';
//import {UserService} from './user.service'
//import {dataType} from './type'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private vcr:ViewContainerRef,
    private cfr:ComponentFactoryResolver
  )
  {}
  async loadAdmin(){
    this.vcr.clear();
    const {AdminlistComponent} = await import('./adminlist/adminlist.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(AdminlistComponent)
    )
  }

  async loadUser(){
    this.vcr.clear();
    const {UserlistComponent} = await import('./userlist/userlist.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(UserlistComponent)
    )
  }
}
