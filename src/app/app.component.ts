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
  name="peter paRKer";
  today=Date.now();
  str="hello from angular";
  money =100;
}
