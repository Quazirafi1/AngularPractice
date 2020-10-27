import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getData(){
    return {
      name:'Rafi',
      age: 22,
      email: 'test@test.com'
    }
  }
}
