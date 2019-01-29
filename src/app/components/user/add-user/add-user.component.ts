import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'ts-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User;
  addUserForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.addUserForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      age: ['', [Validators.required]],
      sex: ['', [Validators.required]]
    });
    // this.addUserForm = new FormGroup({
    //   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    //   surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    //   age: new FormControl('', [Validators.required, Validators.min(1)]),
    //   sex: new FormControl('', [Validators.required]),
    // });
  }

  onAddUser(form: User) {
    const user: User = {
      name: form.name,
      surname: form.surname,
      age: form.age,
      sex: form.sex === '2' ? 'female' : 'male'
    };
    this.userService.addUser(user);
  }

}
