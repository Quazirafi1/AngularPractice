import { Component } from '@angular/core';
//import { Console } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPractice';
  //helloName='Hello from Rafi (property)!';
  /*getHello(name){
    alert('Hello from '+name+'!');
  }*/
  myEvent(evt){
    console.warn(evt);
  }
}
