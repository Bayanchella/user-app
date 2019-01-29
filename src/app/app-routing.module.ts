import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddUserComponent} from './components/user/add-user/add-user.component';
import {ShowUsersComponent} from './components/user/show-users/show-users.component';
import {EditUserComponent} from './components/user/edit-user/edit-user.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  { path: 'add-user', component: AddUserComponent },
  { path: 'show-users', component: ShowUsersComponent },
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
