import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ts-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  addUserForm: FormGroup;

  users: User[];
  id = this.route.snapshot.paramMap.get('id');
  userForEditing: User;


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    console.log(typeof this.id, this.id);
    this.users = userService.getUsers();
    this.userForEditing = this.users[Number(this.id) - 1];
  }

  ngOnInit() {
    this.addUserForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      age: ['', [Validators.required]],
      sex: ['', [Validators.required]]
    });
  }

  submitEditing() {
    this.users[Number(this.id) - 1] = this.userForEditing;
    this.router.navigate(['show-users']);
  }

}
