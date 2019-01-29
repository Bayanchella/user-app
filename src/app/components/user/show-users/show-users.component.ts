import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ts-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService, private router: Router) {
    this.users = userService.getUsers();
    console.log(this.users);
  }

  ngOnInit() {
  }

  editUser(i) {
    const url = 'edit-user/' + (Number(i) + 1);
    this.router.navigate([url]);
  }

  deleteUser(i) {
    this.users.splice(i, 1);
  }

}
