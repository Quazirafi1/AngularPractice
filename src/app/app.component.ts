import { Component } from '@angular/core';
//import { Console } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPractice';
  txt="";
  txt1="";
  takeInput(val){
    this.txt=val;
  }
  getVal(val){
    this.txt1=val;
  }
}
