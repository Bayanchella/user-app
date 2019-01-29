import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ts-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  nav(value) {
    if (value.toElement.innerText === 'Add') {
      this.router.navigate(['add-user']);
    } else if (value.toElement.innerText === 'Edit') {
      this.router.navigate(['edit-user']);
    } else if (value.toElement.innerText === 'All Users') {
      this.router.navigate(['show-users']);
    } else if (value.toElement.innerText === 'Home Page') {
      this.router.navigate(['home']);
    }
  }

}
