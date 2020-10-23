import { Component } from '@angular/core';
//import { Console } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPractice';

  show="blue";
  disabledBox=true;
  enableBox(){
    this.disabledBox=false;
  }
}
