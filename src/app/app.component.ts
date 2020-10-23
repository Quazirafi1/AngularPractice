import { Component } from '@angular/core';
//import { Console } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPractice';

  data=[
    {
      name:'Peter',
      age: 22
    },
    {
      name:'Jenny',
      age: 19
    },
    {
      name:'Liam',
      age: 21
    },
    {
      name:'Jessey',
      age: 21
    }
  ]
}
