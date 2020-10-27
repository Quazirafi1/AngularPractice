import { Component } from '@angular/core';
import { from } from 'rxjs';
//import { TestBed } from '@angular/core/testing';
//import { Console } from 'console';
import {UserService} from './user.service'
import {dataType} from './type'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {}
  getData(){
    const data:dataType={
      name: "peter",
      id:1,
      tall: true,
      address: "Dhaka 1212"
    }
    return data;
  }
}
