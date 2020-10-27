import { Component } from '@angular/core';
import { from } from 'rxjs';
//import { TestBed } from '@angular/core/testing';
//import { Console } from 'console';
import {UserService} from './user.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private user: UserService){
    this.user.getData().subscribe(data =>{
      console.warn(data);
    });
  }
}
