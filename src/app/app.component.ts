import { Component } from '@angular/core';
//import { Console } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPractice';

  color="yellow";
  err=false;
  change(){
    this.color="blue";
    this.err=!this.err;
  }

}
