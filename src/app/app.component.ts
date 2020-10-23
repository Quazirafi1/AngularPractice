import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPractice';
  helloName='Hello from Rafi (property)!';
  getHello(name){
    alert('Hello from '+name+'!');
  }
}
