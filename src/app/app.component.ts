import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
//import { Console } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPractice';

  data = [{
   name:'Daniel',
   age: 23,
   email: 'test@test.com'
  },
  {
    name:'Daniel1',
    age: 22,
    email: 'test1@test.com'
  },
  {
    name:'Daniel2',
    age: 24,
    email: 'test2@test.com'
  }];
}
