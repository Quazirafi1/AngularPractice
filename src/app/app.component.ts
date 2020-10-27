import { Component } from '@angular/core';
//import { TestBed } from '@angular/core/testing';
//import { Console } from 'console';
import {UserService} from './user.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name="";
  constructor(private user:UserService){
    console.warn(this.user.getData());
    this.name=this.user.getData().name;
  }
}
