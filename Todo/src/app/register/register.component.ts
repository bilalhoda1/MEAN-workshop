import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name;
  pass;
  fname;
  lname;
  email;
  constructor() { }

  ngOnInit() {
  }
  addDetails()
  {
    localStorage.setItem("lastname", this.lname);
    localStorage.setItem("email", this.email);
    localStorage.setItem("firstname", this.fname);
    localStorage.setItem("username", this.name);
    localStorage.setItem("password", this.pass);
    console.log(localStorage.getItem('username'));
  }
}
