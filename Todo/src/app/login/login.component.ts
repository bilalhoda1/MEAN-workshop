import { Component, OnInit } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  password;
  constructor(private router: Router) {}

  ngOnInit() {
  }
  check() { console.log(localStorage.getItem('username'));
    console.log(this.username === localStorage.getItem('username'));
    if ( this.username === localStorage.getItem('username') && this.password === localStorage.getItem('password')) {
      this.router.navigate(['/home']);
    }
  }
}
