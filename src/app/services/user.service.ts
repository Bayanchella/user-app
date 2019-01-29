import { Injectable } from '@angular/core';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    { name: 'Vitalik', surname: 'Boyanivskyy', age: 19, sex: 'male'},
    { name: 'Oleksandr', surname: 'Demidov', age: 18, sex: 'male'}
  ];

  constructor() { }

  getUsers() {
    return this.users;
  }

  addUser(user) {
    this.users.push(user);
  }

}
