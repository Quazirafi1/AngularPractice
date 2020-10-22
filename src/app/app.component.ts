import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPractice';
  something = 'Here you go!';
  getSomething(){
    return this.something;
  }
  obj={
    name: 'Rafi',
    age: 22
  };
  friends=['Anannya', 'Sahil', 'Noman'];
  siteUrl = window.location.href;
}
